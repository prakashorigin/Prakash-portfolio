"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FaCode, FaServer, FaPalette, FaRocket } from "react-icons/fa";

const highlights = [
  {
    icon: FaCode,
    title: "Frontend Development",
    description:
      "Building responsive, pixel-perfect UIs with React, Next.js, and Tailwind CSS.",
  },
  {
    icon: FaServer,
    title: "Backend Development",
    description:
      "Creating scalable APIs and services with Node.js, Express, and databases.",
  },
  {
    icon: FaPalette,
    title: "UI/UX Design",
    description:
      "Designing intuitive and beautiful interfaces with modern design principles.",
  },
  {
    icon: FaRocket,
    title: "Performance",
    description:
      "Optimizing web applications for speed, SEO, and exceptional user experience.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="relative py-24 section-container">
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-200">
              Passionate Developer Building the{" "}
              <span className="gradient-text">Future of Web</span>
            </h3>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Hello! I&apos;m{" "}
                <strong className="text-white">Prakash Sharma</strong>, A Full
                Stack Developer with a passion for creating exceptional digital
                experiences. I specialize in building modern web applications
                using cutting-edge technologies.
              </p>
              <p>
                With expertise in the MERN stack and Next.js ecosystem, I
                transform ideas into production-ready applications. I believe in
                writing clean, maintainable code and staying current with the
                latest web technologies.
              </p>
              <p>
                When I&apos;m not coding, I contribute to open-source projects,
                write technical blog posts, and explore new technologies.
                I&apos;m always eager to learn and take on new challenges.
              </p>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {[
                { number: "1+", label: "Years Experience" },
                { number: "15+", label: "Projects Built" },
                { number: "10+", label: "Happy Clients" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="text-center p-4 glass rounded-xl"
                >
                  <div className="text-2xl font-bold gradient-text">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Highlight cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass rounded-2xl p-6 hover:border-purple-500/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:from-purple-600/40 group-hover:to-cyan-500/40 transition-all">
                  <item.icon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
                </div>
                <h4 className="font-semibold text-white mb-2">{item.title}</h4>
                <p className="text-sm text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
