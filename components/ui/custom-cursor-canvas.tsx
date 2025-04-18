"use client";

import { useEffect, useRef } from "react";

export default function CustomCursorCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particles: Particle[] = [];

  type Particle = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    size: number;
    alpha: number;
    color: string;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;

    // ✅ Use CSS pixels directly (fixes Firefox offset issues)
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.width = "100%";
    canvas.style.height = "100%";

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const createParticle = (x: number, y: number, explosion = false) => {
      const angle = Math.random() * Math.PI * 2;
      const speed = explosion ? Math.random() * 4 + 2 : Math.random() * 1.5;
      particles.push({
        x,
        y,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        size: Math.random() * 2 + 1,
        alpha: 1,
        color: `hsla(${Math.random() * 360}, 100%, 70%, 1)`,
      });
    };

    const drawLineBetweenParticles = (p1: Particle, p2: Particle) => {
      const dx = p1.x - p2.x;
      const dy = p1.y - p2.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 60) {
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(255,255,255,${(1 - dist / 60) * 0.1})`;
        ctx.stroke();
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Optional: draw debug dot to verify cursor sync
      // ctx.beginPath();
      // ctx.arc(mouseX, mouseY, 3, 0, Math.PI * 2);
      // ctx.fillStyle = "red";
      // ctx.fill();

      // Draw central glowing dot
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, 4, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();

      // Draw all particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.alpha -= 0.01;

        p.vx *= 0.95;
        p.vy *= 0.95;

        if (p.alpha <= 0) {
          particles.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace("1)", `${p.alpha})`);
        ctx.fill();

        // Connect lines
        for (let j = i - 1; j >= 0; j--) {
          drawLineBetweenParticles(p, particles[j]);
        }
      }

      requestAnimationFrame(render);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Optional: create trailing particle (comment out to disable)
      createParticle(mouseX, mouseY, false);
    };

    const handleClick = () => {
      for (let i = 0; i < 20; i++) {
        createParticle(mouseX, mouseY, true); // 💥 explosion
      }
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    render();
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleClick);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleClick);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-[30]"
    />
  );
}
