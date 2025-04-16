"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import ParticleBackground from "./particle-background";

interface HeroProps {
  onExploreClick: () => void;
}

export default function Hero({ onExploreClick }: HeroProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;

      const { clientX, clientY } = e;
      const { left, top, width, height } =
        containerRef.current.getBoundingClientRect();

      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;

      const elements =
        containerRef.current.querySelectorAll(".parallax-element");
      elements.forEach((el) => {
        const depth = Number.parseFloat(el.getAttribute("data-depth") || "0");
        const translateX = x * depth * 50;
        const translateY = y * depth * 50;
        (
          el as HTMLElement
        ).style.transform = `translate(${translateX}px, ${translateY}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground />

      <div
        ref={containerRef}
        className="container relative z-10 parallax-container"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center"
        >
          <motion.h2
            className="text-4xl md:text-10xl mb-4 text-magicPurple font-light tracking-wider parallax-element"
            data-depth="0.2"
          >
            Hello, I'm
          </motion.h2>

          <motion.h1
            className="text-xl md:text-xl lg:text-8xl font-bold mb-12 mt-8 py-4 glow-text magic-text parallax-element"
            data-depth="0.1"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
            }}
          >
            Fabio Niglio
          </motion.h1>

          <motion.h3
            className="text-xl md:text-3xl mb-8 text-electricBlue font-light parallax-element"
            data-depth="0.3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Creative Developer & Digital Magician
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="parallax-element"
            data-depth="0.4"
          >
            <Button
              onClick={onExploreClick}
              className="bg-gradient-to-r from-magicPurple via-electricBlue to-magicalGreen hover:shadow-lg hover:shadow-magicPurple/20 transition-all duration-300 group"
              size="lg"
            >
              Explore My Work
              <ChevronDown className="ml-2 h-4 w-4 group-hover:animate-bounce" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
