"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trail1, setTrail1] = useState({ x: 0, y: 0 });
  const [trail2, setTrail2] = useState({ x: 0, y: 0 });
  const [trail3, setTrail3] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [linkHovered, setLinkHovered] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setHidden(false);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    const handleLinkHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button")
      ) {
        setLinkHovered(true);
      } else {
        setLinkHovered(false);
      }
    };

    const handleMouseLeave = () => setHidden(true);

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleLinkHoverStart);
    document.addEventListener("mouseleave", handleMouseLeave);

    document.body.classList.add("cursor-none");

    // ✅ Use requestAnimationFrame for smooth trailing
    let animationFrameId: number;

    const updateTrails = () => {
      setTrail1((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.15,
        y: prev.y + (position.y - prev.y) * 0.15,
      }));
      setTrail2((prev) => ({
        x: prev.x + (trail1.x - prev.x) * 0.15,
        y: prev.y + (trail1.y - prev.y) * 0.15,
      }));
      setTrail3((prev) => ({
        x: prev.x + (trail2.x - prev.x) * 0.15,
        y: prev.y + (trail2.y - prev.y) * 0.15,
      }));

      animationFrameId = requestAnimationFrame(updateTrails);
    };

    animationFrameId = requestAnimationFrame(updateTrails);

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleLinkHoverStart);
      document.removeEventListener("mouseleave", handleMouseLeave);

      document.body.classList.remove("cursor-none");

      cancelAnimationFrame(animationFrameId);
    };
  }, [position, trail1, trail2, trail3]);
  return (
    <>
      {/* Aura glow */}
      <motion.div
        className="fixed top-0 left-0 w-40 h-40 rounded-full pointer-events-none z-40"
        animate={{
          x: position.x - 80,
          y: position.y - 80,
          opacity: hidden ? 0 : 0.1,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 100,
          mass: 1,
          delay: 0.02,
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(250,64,255,0.3) 0%, rgba(80,199,255,0.2) 50%, rgba(72,255,167,0) 80%)",
        }}
      />

      {/* Trails — biggest first, then smaller */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full bg-magicPurple/40 mix-blend-screen pointer-events-none z-40"
        animate={{
          x: trail3.x - 4,
          y: trail3.y - 4,
          opacity: hidden ? 0 : 0.3,
        }}
        transition={{ duration: 0 }}
      />

      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-electricBlue/60 mix-blend-screen pointer-events-none z-40"
        animate={{
          x: trail2.x - 3,
          y: trail2.y - 3,
          opacity: hidden ? 0 : 0.4,
        }}
        transition={{ duration: 0 }}
      />

      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-magicalGreen/70 mix-blend-screen pointer-events-none z-40"
        animate={{
          x: trail1.x - 2,
          y: trail1.y - 2,
          opacity: hidden ? 0 : 0.5,
        }}
        transition={{ duration: 0 }}
      />
    </>
  );
}
