"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { techStackTimeline } from "@/data/techStack";

export default function TechStackTimeline() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="tech-stack"
      className="relative py-24 section-container overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My Tech <span className="gradient-text">Journey</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Evolution of skills and technologies throughout my development
            journey
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-600 to-cyan-500" />

          {/* Timeline items */}
          <div className="space-y-12">
            {techStackTimeline.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`flex gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Content */}
                <div className="flex-1 md:w-1/2">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300 group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-cyan-500/0 group-hover:from-purple-600/10 group-hover:to-cyan-500/10 rounded-xl transition-all duration-300" />

                    <div className="relative">
                      <span className="inline-block px-3 py-1 mb-3 text-sm font-semibold text-purple-400 bg-purple-500/20 rounded-full border border-purple-500/40">
                        {item.year}
                      </span>

                      <h3 className="text-2xl font-bold text-white mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-400 mb-4">{item.description}</p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium text-cyan-400 bg-cyan-500/20 rounded-full border border-cyan-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Timeline dot */}
                <div className="flex justify-center md:w-auto">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                    className="w-4 h-4 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full border-4 border-[#0a0a0a] relative z-10 flex-shrink-0 mt-6 md:mt-0"
                  />
                </div>

                {/* Spacer for layout */}
                <div className="flex-1 md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
