"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Quiz Note",
    description:
      "Quiz Note is free and open source. You use it with your own API key which stored securely.",
    image: "/images/note-quiz.png?height=600&width=800",
    tags: ["Typpescript", "Javascript", "CSS", "HTML", "OpenAi"],
    links: {
      live: "https://noteninjaquiz.netlify.app/",
      github: "https://github.com/fabioniglio/quiz-app",
    },
  },
  {
    title: "LearnLinx",
    description:
      "Overview Learnlinx is a cutting-edge Learning Management System (LMS) designed to revolutionize online education. Our platform provides a seamless and efficient learning experience, empowering educators and learners to engage, collaborate, and excel in their educational journey.",
    image: "/images/learnlinx.png?height=600&width=800",
    tags: ["React", "Daily.co", "MongoDB", "TypeScript"],
    links: {
      live: "https://learnlinx2.netlify.app/",
      github: "https://github.com/fabioniglio/learnlinx",
    },
  },
  {
    title: "Project Tower Defense",
    description:
      "Fortress Guardians: Orc Siege is a pixel-art-style tower defense game where you must strategically build defenses to protect your base from waves of incoming orcs. Players earn coins by defeating orcs and spend them to place defensive towers in critical locations along the path. Each wave becomes more intense, testing your strategic planning and resource management. If an orc reaches the end, you lose a heart — lose all your hearts, and it's game over.",
    image: "/images/tower-defense.png?height=600&width=800",
    tags: ["Javascript", "HTML", "CSS"],
    links: {
      live: "https://fabioniglio.github.io/project-game-tower-defense/",
      github: "https://github.com/fabioniglio/project-game-tower-defense",
    },
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black z-0" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 glow-text">
            My <span className="magic-text">Projects</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Explore the magical digital experiences I've created.
          </p>
        </motion.div>

        <div ref={containerRef} className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-magicPurple via-electricBlue to-magicalGreen rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-1000"></div>
                <div className="relative bg-black rounded-lg overflow-hidden">
                  <Image
                    src={projects[activeIndex].image || "/placeholder.svg"}
                    alt={projects[activeIndex].title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              <div>
                <Card className="bg-black/50 border border-magicPurple/20 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-8 relative">
                    <div className="absolute -right-20 -top-20 w-40 h-40 bg-magicPurple/10 rounded-full blur-3xl" />

                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                      {projects[activeIndex].title}
                    </h3>

                    <p className="text-gray-300 mb-6 text-lg">
                      {projects[activeIndex].description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8">
                      {projects[activeIndex].tags.map((tag, idx) => (
                        <Badge
                          key={idx}
                          className="bg-black/50 text-magicalGreen border border-magicalGreen/30"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <Button
                        className="bg-gradient-to-r from-magicPurple to-electricBlue hover:shadow-lg hover:shadow-magicPurple/20 transition-all duration-300 group"
                        asChild
                      >
                        <a
                          href={projects[activeIndex].links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Live Demo
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </a>
                      </Button>

                      <Button
                        variant="outline"
                        className="border-electricBlue/50 text-electricBlue hover:bg-electricBlue/10 transition-all duration-300"
                        asChild
                      >
                        <a
                          href={projects[activeIndex].links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Source Code
                          <Github className="ml-2 h-4 w-4" />
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-12 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevProject}
              className="rounded-full border-electricBlue/50 text-electricBlue hover:bg-electricBlue/10 transition-all duration-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex gap-2">
              {projects.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    idx === activeIndex
                      ? "bg-gradient-to-r from-magicPurple to-electricBlue scale-125"
                      : "bg-gray-600 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to project ${idx + 1}`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextProject}
              className="rounded-full border-electricBlue/50 text-electricBlue hover:bg-electricBlue/10 transition-all duration-300"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
