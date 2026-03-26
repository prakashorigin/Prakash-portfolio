"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaStar, FaCodeBranch, FaCode } from "react-icons/fa";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
}

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
}

const languageColors: Record<string, string> = {
  JavaScript: "#f1e05a",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Java: "#b07219",
  "C++": "#f34b7d",
  Go: "#00ADD8",
  Rust: "#dea584",
};

export default function GitHubSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [stats, setStats] = useState<GitHubUser | null>(null);
  const [loading, setLoading] = useState(true);

  const username = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "prakash";

  useEffect(() => {
    async function fetchData() {
      try {
        const [reposRes, userRes] = await Promise.all([
          fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
          ),
          fetch(`https://api.github.com/users/${username}`),
        ]);

        if (reposRes.ok) {
          const reposData = await reposRes.json();
          setRepos(reposData);
        }
        if (userRes.ok) {
          const userData = await userRes.json();
          setStats(userData);
        }
      } catch (error) {
        console.error("GitHub API error:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [username]);

  const totalStars = repos.reduce((acc, r) => acc + r.stargazers_count, 0);

  return (
    <section className="relative py-24 section-container">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            GitHub <span className="gradient-text">Activity</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-cyan-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            My open source contributions and recent repositories
          </p>
        </motion.div>

        {/* Stats */}
        {stats && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {[
              {
                label: "Repositories",
                value: stats.public_repos,
                icon: FaCode,
              },
              {
                label: "Followers",
                value: stats.followers,
                icon: FaCodeBranch,
              },
              {
                label: "Following",
                value: stats.following,
                icon: FaCodeBranch,
              },
              { label: "Total Stars", value: totalStars, icon: FaStar },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
                className="glass rounded-xl p-5 text-center hover:border-purple-500/40 transition-all duration-300"
              >
                <item.icon className="w-5 h-5 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold gradient-text">
                  {item.value}
                </div>
                <div className="text-xs text-gray-500 mt-1">{item.label}</div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Repos */}
        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="glass rounded-xl p-6 animate-pulse h-40"
              />
            ))}
          </div>
        ) : repos.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {repos.map((repo, i) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300 group block"
              >
                <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors mb-2 truncate">
                  {repo.name}
                </h4>
                <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                  {repo.description || "No description"}
                </p>
                <div className="flex items-center gap-4 text-xs text-gray-500">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{
                          backgroundColor:
                            languageColors[repo.language] || "#858585",
                        }}
                      />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <FaStar className="w-3 h-3" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaCodeBranch className="w-3 h-3" />
                    {repo.forks_count}
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 py-12">
            <p>
              Unable to load repositories. Check your GitHub username in
              settings.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
