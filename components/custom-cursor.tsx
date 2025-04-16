"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
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
      if (
        (e.target as HTMLElement).tagName === "A" ||
        (e.target as HTMLElement).tagName === "BUTTON" ||
        (e.target as HTMLElement).closest("a") ||
        (e.target as HTMLElement).closest("button")
      ) {
        setLinkHovered(true);
      } else {
        setLinkHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    document.addEventListener("mousemove", updatePosition);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleLinkHoverStart);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Add cursor-none class to body
    document.body.classList.add("cursor-none");

    return () => {
      document.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleLinkHoverStart);
      document.removeEventListener("mouseleave", handleMouseLeave);

      // Remove cursor-none class from body
      document.body.classList.remove("cursor-none");
    };
  }, []);

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-magicPurple/50 mix-blend-screen pointer-events-none z-50"
        animate={{
          x: position.x - 12,
          y: position.y - 12,
          scale: clicked ? 0.8 : linkHovered ? 1.5 : 1,
          opacity: hidden ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 300,
          mass: 0.5,
        }}
      />

      <motion.div
        className="fixed top-0 left-0 w-4 h-4 rounded-full bg-electricBlue/70 mix-blend-screen pointer-events-none z-50"
        animate={{
          x: position.x - 8,
          y: position.y - 8,
          scale: clicked ? 1.2 : linkHovered ? 0.5 : 1,
          opacity: hidden ? 0 : 0.8,
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 200,
          mass: 0.8,
          delay: 0.01,
        }}
      />

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
        }}
        style={{
          background:
            "radial-gradient(circle, rgba(250,64,255,0.3) 0%, rgba(80,199,255,0.2) 50%, rgba(72,255,167,0) 80%)",
        }}
      />

      <motion.div
        className="trail fixed top-0 left-0 w-2 h-2 rounded-full bg-magicalGreen/80 mix-blend-screen pointer-events-none z-40"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: hidden ? 0 : 0.6,
        }}
        transition={{
          type: "tween",
          duration: 0.5,
          delay: 0.1,
        }}
      />

      <motion.div
        className="trail fixed top-0 left-0 w-2 h-2 rounded-full bg-electricBlue/80 mix-blend-screen pointer-events-none z-40"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: hidden ? 0 : 0.6,
        }}
        transition={{
          type: "tween",
          duration: 0.5,
          delay: 0.2,
        }}
      />

      <motion.div
        className="trail fixed top-0 left-0 w-2 h-2 rounded-full bg-magicPurple/80 mix-blend-screen pointer-events-none z-40"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: hidden ? 0 : 0.6,
        }}
        transition={{
          type: "tween",
          duration: 0.5,
          delay: 0.3,
        }}
      />
    </>
  );
}
