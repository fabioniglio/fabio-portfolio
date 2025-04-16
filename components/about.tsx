"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Code, Palette, Lightbulb } from "lucide-react";

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden">
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
            About <span className="magic-text">Me</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            I'm a creative developer passionate about building magical digital
            experiences that blend art and technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/50 border border-magicPurple/20 backdrop-blur-sm overflow-hidden group hover:shadow-lg hover:shadow-magicPurple/20 transition-all duration-500">
              <CardContent className="p-6 relative">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-magicPurple/10 rounded-full blur-3xl group-hover:bg-magicPurple/20 transition-all duration-700" />

                <div className="flex items-start gap-4">
                  <div className="bg-magicPurple/20 p-3 rounded-lg">
                    <Code className="h-6 w-6 text-magicPurple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Developer</h3>
                    <p className="text-gray-400">
                      I craft clean, efficient code to bring creative ideas to
                      life. Specializing in Salesforce, React, Node, learning
                      about Three.js, and interactive web experiences.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/50 border border-electricBlue/20 backdrop-blur-sm overflow-hidden group hover:shadow-lg hover:shadow-electricBlue/20 transition-all duration-500">
              <CardContent className="p-6 relative">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-electricBlue/10 rounded-full blur-3xl group-hover:bg-electricBlue/20 transition-all duration-700" />

                <div className="flex items-start gap-4">
                  <div className="bg-electricBlue/20 p-3 rounded-lg">
                    <Palette className="h-6 w-6 text-electricBlue" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Designer</h3>
                    <p className="text-gray-400">
                      I create visually stunning interfaces with attention to
                      detail, focusing on user experience and aesthetic appeal.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/50 border border-magicalGreen/20 backdrop-blur-sm overflow-hidden group hover:shadow-lg hover:shadow-magicalGreen/20 transition-all duration-500">
              <CardContent className="p-6 relative">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-magicalGreen/10 rounded-full blur-3xl group-hover:bg-magicalGreen/20 transition-all duration-700" />

                <div className="flex items-start gap-4">
                  <div className="bg-magicalGreen/20 p-3 rounded-lg">
                    <Lightbulb className="h-6 w-6 text-magicalGreen" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Innovator</h3>
                    <p className="text-gray-400">
                      I push boundaries by exploring new technologies and
                      creative approaches to solve complex problems.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black/50 border border-magicPurple/20 backdrop-blur-sm overflow-hidden group hover:shadow-lg hover:shadow-magicPurple/20 transition-all duration-500">
              <CardContent className="p-6 relative">
                <div className="absolute -right-20 -top-20 w-40 h-40 bg-magicPurple/10 rounded-full blur-3xl group-hover:bg-magicPurple/20 transition-all duration-700" />

                <div className="flex items-start gap-4">
                  <div className="bg-magicPurple/20 p-3 rounded-lg">
                    <Sparkles className="h-6 w-6 text-magicPurple" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Magician</h3>
                    <p className="text-gray-400">
                      I create digital magic through animations, interactions,
                      and experiences that surprise and delight users.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <motion.div
          className="mt-16 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-gray-300 leading-relaxed">
            Full Stack Developer with over 10 years of experience, including 9
            years building robust Salesforce solutions and 2+ years developing
            my skills modern web applications with React, Node.js, and cloud
            platforms. I thrive at the intersection of performance and
            creativity—whether it's architecting scalable enterprise systems or
            designing playful personal projects like a React-based e-learning
            platform or an AI-powered quiz app. I'm fluent across the stack,
            with hands-on experience in AWS, GitHub Actions, and GCP. Currently
            diving deeper into Next.js, Supabase, MongoDB, OpenAi, Ai Agents and
            the Daily API—tools that help me turn complex ideas into seamless,
            interactive experiences on the web.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
