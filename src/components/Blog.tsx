"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { blogPosts } from "@/data/projects";
import { FaClock, FaArrowRight } from "react-icons/fa";

export default function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" className="relative py-24 section-container">
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
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights about web development
          </p>
        </motion.div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
              className="glass rounded-2xl overflow-hidden group hover:border-purple-500/40 transition-all duration-300"
            >
              {/* Gradient header */}
              <div className="h-2 bg-gradient-to-r from-purple-600 to-cyan-500" />

              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-1">
                    <FaClock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                  <span>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all link */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-xl text-purple-300 hover:text-white hover:bg-purple-500/10 transition-all duration-300 group"
          >
            View All Articles
            <FaArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
