"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experiences = [
  {
    title: "Senior Frontend Developer",
    company: "Digital Wizards Inc.",
    period: "2021 - Present",
    description:
      "Leading the development of interactive web applications using React, Three.js, and WebGL. Implementing advanced animations and 3D experiences.",
    skills: ["React", "Three.js", "WebGL", "GSAP", "TypeScript"],
  },
  {
    title: "Creative Developer",
    company: "Magical Interfaces",
    period: "2019 - 2021",
    description:
      "Designed and developed interactive user interfaces with a focus on animation and user experience. Created custom visualization tools and interactive dashboards.",
    skills: ["JavaScript", "Canvas", "SVG", "Animation", "UI/UX"],
  },
  {
    title: "Web Developer",
    company: "Enchanted Solutions",
    period: "2017 - 2019",
    description:
      "Built responsive websites and web applications. Implemented frontend features and collaborated with designers to create engaging user experiences.",
    skills: ["HTML/CSS", "JavaScript", "React", "Responsive Design"],
  },
]

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={containerRef} className="py-20 relative overflow-hidden bg-black/80">
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
            My <span className="magic-text">Experience</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            A journey through my professional career and the magical experiences I've created.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-magicPurple via-electricBlue to-magicalGreen transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`relative mb-16 md:mb-24 ${
                index % 2 === 0 ? "md:pr-12 md:ml-auto md:mr-0" : "md:pl-12 md:mr-auto md:ml-0"
              } md:w-1/2 w-full pl-12`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-0 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-magicPurple to-electricBlue glow transform md:translate-x-[-50%] z-10" />

              {/* Timeline date bubble */}
              <div
                className={`absolute top-0 left-6 md:left-0 ${
                  index % 2 === 0 ? "md:-left-32" : "md:left-auto md:-right-32"
                }`}
              >
                <div className="bg-black/80 border border-electricBlue/30 px-4 py-1 rounded-full text-sm text-electricBlue">
                  {exp.period}
                </div>
              </div>

              <Card className="bg-black/50 border border-electricBlue/20 backdrop-blur-sm overflow-hidden group hover:shadow-lg hover:shadow-electricBlue/20 transition-all duration-500">
                <CardContent className="p-6 relative">
                  <div className="absolute -right-20 -top-20 w-40 h-40 bg-electricBlue/5 rounded-full blur-3xl group-hover:bg-electricBlue/10 transition-all duration-700" />

                  <h3 className="text-xl font-bold mb-1 text-white">{exp.title}</h3>
                  <h4 className="text-lg mb-4 text-electricBlue">{exp.company}</h4>

                  <p className="text-gray-300 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, idx) => (
                      <Badge key={idx} className="bg-black/50 text-electricBlue border border-electricBlue/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

