export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  category: "fullstack" | "frontend" | "backend" | "game";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CrazySnake Game",
    description:
      "Advanced Snake Game with 4 difficulty levels, 6 unlockable skins, power-ups, particle effects, responsive canvas, and mobile swipe controls. Includes Express backend with persistent leaderboards.",
    image: "/projects/snake-game.svg",
    tags: ["React", "Node.js", "Express", "Canvas"],
    github: "https://github.com/prakashorigin/CrazySnake-Game",
    live: "#",
    category: "fullstack",
  },
  {
    id: 2,
    title: "Video Intelligence System",
    description:
      "AI-powered video analysis system using Python and computer vision for real-time object detection, tracking, and intelligent video processing.",
    image: "/projects/video-intelligence.svg",
    tags: ["Python", "OpenCV", "AI", "Machine Learning"],
    github: "https://github.com/prakashorigin/Video-Intelligence-System",
    live: "#",
    category: "backend",
  },
  {
    id: 3,
    title: "Car Racing Game",
    description:
      "Fast-paced car racing game built with vanilla JavaScript and HTML5 Canvas featuring smooth controls, obstacles, and increasing difficulty.",
    image: "/projects/car-racing.svg",
    tags: ["JavaScript", "HTML5 Canvas", "CSS", "Game Dev"],
    github: "https://github.com/prakashorigin/Car-Racing-Game",
    live: "#",
    category: "game",
  },
  {
    id: 4,
    title: "Tic Tac Toe",
    description:
      "Classic Tic Tac Toe game with Python backend and clean HTML/CSS frontend. Features player vs player mode with win detection logic.",
    image: "/projects/tic-tac-toe.svg",
    tags: ["Python", "HTML", "CSS", "Game Logic"],
    github: "https://github.com/prakashorigin/tic-tac-toe",
    live: "#",
    category: "game",
  },
  {
    id: 5,
    title: "Rock Paper Scissor",
    description:
      "Interactive Rock Paper Scissors game built with Python featuring AI opponent, score tracking, and clean game logic.",
    image: "/projects/rock-paper-scissor.svg",
    tags: ["Python", "Game Logic", "CLI"],
    github: "https://github.com/prakashorigin/rock-paper-scissor",
    live: "#",
    category: "game",
  },
  {
    id: 6,
    title: "Rent Calculator",
    description:
      "Simple and practical rent calculator application with Python backend and web interface for quick rent splitting and expense calculations.",
    image: "/projects/rent-calculator.svg",
    tags: ["Python", "HTML", "CSS", "Calculator"],
    github: "https://github.com/prakashorigin/rent-calculator",
    live: "#",
    category: "frontend",
  },
  {
    id: 7,
    title: "Portfolio Website",
    description:
      "Modern developer portfolio built with Next.js, Tailwind CSS, and Framer Motion featuring dark mode, animations, and particle effects.",
    image: "/projects/portfolio-site.svg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/prakashorigin",
    live: "#",
    category: "frontend",
  },
  {
    id: 8,
    title: "E-Commerce App",
    description:
      "Full-stack e-commerce application with product catalog, shopping cart, user authentication, and payment integration.",
    image: "/projects/ecommerce-app.svg",
    tags: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/prakashorigin",
    live: "#",
    category: "fullstack",
  },
];

export const skills = [
  { name: "React", level: 90, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 82, category: "Frontend" },
  { name: "HTML/CSS", level: 95, category: "Frontend" },
  { name: "JavaScript", level: 92, category: "Frontend" },
  { name: "Tailwind CSS", level: 88, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Express", level: 80, category: "Backend" },
  { name: "MongoDB", level: 78, category: "Backend" },
  { name: "GitHub", level: 88, category: "Tools" },
  { name: "Docker", level: 70, category: "Tools" },
  { name: "VS Code", level: 95, category: "Tools" },
  { name: "Vercel", level: 85, category: "Tools" },
];

export const experiences = [
  {
    role: "Full Stack Developer",
    company: "Freelance",
    duration: "2024 - Present",
    description:
      "Building modern web applications for clients using React, Next.js, and Node.js. Delivering pixel-perfect designs with great user experiences.",
  },
  {
    role: "Frontend Developer",
    company: "Open Source Contributor",
    duration: "2023 - Present",
    description:
      "Contributing to open-source projects on GitHub. Working with React ecosystem, writing documentation, and fixing bugs.",
  },
];

export const blogPosts = [
  {
    id: 1,
    title: "Getting Started with Next.js 15",
    excerpt:
      "Learn how to build modern web applications with the latest version of Next.js and its new features.",
    date: "2026-02-15",
    readTime: "5 min read",
    tags: ["Next.js", "React", "Web Development"],
    slug: "getting-started-nextjs-15",
  },
  {
    id: 2,
    title: "Mastering Tailwind CSS in 2026",
    excerpt:
      "A comprehensive guide to using Tailwind CSS v4 effectively in your projects with the latest utility classes.",
    date: "2026-01-28",
    readTime: "8 min read",
    tags: ["Tailwind CSS", "CSS", "Design"],
    slug: "mastering-tailwind-css-2026",
  },
  {
    id: 3,
    title: "Building REST APIs with Node.js",
    excerpt:
      "Step-by-step guide to creating scalable and secure REST APIs using Node.js, Express, and MongoDB.",
    date: "2026-01-10",
    readTime: "10 min read",
    tags: ["Node.js", "API", "Backend"],
    slug: "building-rest-apis-nodejs",
  },
  {
    id: 4,
    title: "React Hooks Deep Dive",
    excerpt:
      "Understanding advanced React hooks patterns including custom hooks, useReducer, and performance optimization.",
    date: "2025-12-20",
    readTime: "12 min read",
    tags: ["React", "Hooks", "JavaScript"],
    slug: "react-hooks-deep-dive",
  },
  {
    id: 5,
    title: "TypeScript Best Practices",
    excerpt:
      "Write better TypeScript code with these proven patterns, utility types, and configuration tips.",
    date: "2025-11-15",
    readTime: "7 min read",
    tags: ["TypeScript", "JavaScript", "Best Practices"],
    slug: "typescript-best-practices",
  },
];
