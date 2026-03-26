"use client";

import { motion } from "framer-motion";
import { blogPosts } from "@/data/projects";
import { FaClock, FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8"
          >
            <FaArrowLeft className="w-3 h-3" />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Developer <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Thoughts, tutorials, and insights about web development, React,
            Node.js, and modern technologies.
          </p>
        </motion.div>
      </div>

      {/* Blog posts */}
      <div className="max-w-5xl mx-auto px-4 pb-24">
        <div className="grid gap-6">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
              whileHover={{ x: 4 }}
              className="glass rounded-2xl p-8 hover:border-purple-500/40 transition-all duration-300 group cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Date */}
                <div className="flex-shrink-0 text-center md:w-20">
                  <div className="text-3xl font-bold gradient-text">
                    {new Date(post.date).getDate()}
                  </div>
                  <div className="text-xs text-gray-500 uppercase">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-3">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-gray-400 mb-3">{post.excerpt}</p>

                  <div className="flex items-center gap-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <FaClock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
