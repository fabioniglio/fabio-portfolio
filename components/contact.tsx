"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Twitter, Mail, Send } from "lucide-react";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [state, handleSubmit] = useForm("mnnpreol");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
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
            Contact <span className="magic-text">Me</span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            Let's create something magical together. Reach out and let's start a
            conversation.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-electricBlue">
              Get in Touch
            </h3>

            <p className="text-gray-300 mb-8 leading-relaxed">
              I'm always open to new opportunities, collaborations, or just a
              friendly chat about web development, design, or digital magic.
              Feel free to reach out through the form or connect with me on
              social media.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-magicPurple/20 p-3 rounded-lg">
                  <Mail className="h-6 w-6 text-magicPurple" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a
                    href="mailto:hello@example.com"
                    className="text-gray-400 hover:text-electricBlue transition-colors"
                  >
                    fabioniglio@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-electricBlue/20 p-3 rounded-lg">
                  <Linkedin className="h-6 w-6 text-electricBlue" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">LinkedIn</h4>
                  <a
                    href="https://www.linkedin.com/in/fabioniglio/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-electricBlue transition-colors"
                  >
                    linkedin.com/in/fabioniglio
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-magicalGreen/20 p-3 rounded-lg">
                  <Github className="h-6 w-6 text-magicalGreen" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">GitHub</h4>
                  <a
                    href="https://github.com/fabioniglio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-electricBlue transition-colors"
                  >
                    github.com/fabioniglio
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-magicPurple/20 p-3 rounded-lg">
                  <Twitter className="h-6 w-6 text-magicPurple" />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Twitter</h4>
                  <a
                    href="https://x.com/fabio_niglio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-electricBlue transition-colors"
                  >
                    x.com/fabio_niglio
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-magicPurple via-electricBlue to-magicalGreen rounded-xl blur opacity-20"></div>
              <div className="relative bg-black/80 backdrop-blur-sm p-8 rounded-xl border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-white">
                  Send a Message
                </h3>

                {state.succeeded ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-magicalGreen/20 border border-magicalGreen/30 text-magicalGreen p-4 rounded-lg mb-6"
                  >
                    Thank you for your message! I'll get back to you soon.
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="bg-black/50 border-white/10 focus:border-electricBlue focus:ring-electricBlue/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="bg-black/50 border-white/10 focus:border-electricBlue focus:ring-electricBlue/20"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-300 mb-1"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        className="bg-black/50 border-white/10 focus:border-electricBlue focus:ring-electricBlue/20 min-h-[120px]"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-magicPurple to-electricBlue hover:shadow-lg hover:shadow-magicPurple/20 transition-all duration-300"
                      disabled={state.succeeded}
                    >
                      {state.succeeded ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
