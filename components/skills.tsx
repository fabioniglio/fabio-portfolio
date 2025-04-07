"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const skills = [
  { name: "React", level: 90, color: "bg-purple-500" },
  { name: "Three.js", level: 85, color: "bg-blue-500" },
  { name: "JavaScript", level: 95, color: "bg-green-500" },
  { name: "TypeScript", level: 80, color: "bg-purple-500" },
  { name: "CSS/SCSS", level: 90, color: "bg-blue-500" },
  { name: "WebGL", level: 75, color: "bg-green-500" },
  { name: "Next.js", level: 85, color: "bg-purple-500" },
  { name: "GSAP", level: 80, color: "bg-blue-500" },
  { name: "Framer Motion", level: 85, color: "bg-green-500" },
  { name: "Tailwind CSS", level: 90, color: "bg-purple-500" },
  { name: "UI/UX Design", level: 80, color: "bg-blue-500" },
  { name: "Responsive Design", level: 95, color: "bg-green-500" },
];

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="py-20 relative overflow-hidden bg-black/80"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0" />

      <motion.div className="container relative z-10" style={{ opacity }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            My <span className="magic-text">Skills</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            The magical tools and technologies I use to create digital
            experiences.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <div className="mb-2 flex justify-between items-center">
                  <h3 className="text-lg font-medium text-white">
                    {skill.name}
                  </h3>
                  <span className="text-gray-300">{skill.level}%</span>
                </div>

                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden relative">
                  <motion.div
                    className={`absolute top-0 left-0 h-full ${skill.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm rounded-xl z-0" />

          <div className="relative z-10 p-8 rounded-xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-magicPurple mb-2">
                  5+
                </div>
                <div className="text-gray-300">Years Experience</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-electricBlue mb-2">
                  30+
                </div>
                <div className="text-gray-300">Projects Completed</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-magicalGreen mb-2">
                  15+
                </div>
                <div className="text-gray-300">Happy Clients</div>
              </div>

              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-magicPurple mb-2">
                  ∞
                </div>
                <div className="text-gray-300">Magic Created</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
