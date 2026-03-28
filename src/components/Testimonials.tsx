"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { testimonials } from "@/data/testimonials";
import { FaStar } from "react-icons/fa";

export default function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="relative py-24 section-container">
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
            What <span className="gradient-text">People Say</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feedback and testimonials from clients and collaborators I&apos;ve
            worked with
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative p-6 rounded-xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/30 hover:border-purple-500/50 transition-all duration-300"
            >
              {/* Gradient background effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/0 to-cyan-500/0 group-hover:from-purple-600/10 group-hover:to-cyan-500/10 rounded-xl transition-all duration-300 pointer-events-none" />

              <div className="relative">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className="text-yellow-400" size={16} />
                  ))}
                </div>

                {/* Content */}
                <p className="text-gray-300 mb-6 italic">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-700/50">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
