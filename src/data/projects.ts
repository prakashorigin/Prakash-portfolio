export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  github: string;
  live: string;
  category: "fullstack" | "frontend" | "backend" | "game";
  featured?: boolean;
  date?: string;
  difficulty?: "Beginner" | "Intermediate" | "Advanced";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CrazySnake Game",
    description:
      "Advanced Snake Game featuring 4 difficulty levels (Easy to Extreme), 6 unlockable skins, power-ups, particle effects, responsive canvas, and mobile swipe controls. Includes Express backend with persistent web leaderboards, real-time score tracking, and engaging gameplay mechanics.",
    image: "/projects/snake-game.svg",
    tags: ["React", "Node.js", "Express", "Canvas"],
    github: "https://github.com/prakashorigin/CrazySnake-Game",
    live: "https://crazysnake.vercel.app",
    category: "fullstack",
    featured: true,
    date: "2025-06",
    difficulty: "Advanced",
  },
  {
    id: 2,
    title: "Video Intelligence System",
    description:
      "AI-powered video analysis system leveraging Python and computer vision for real-time object detection, multi-object tracking, and intelligent video processing. Supports multiple video formats with edge detection and behavioral analysis capabilities.",
    image: "/projects/video-intelligence.svg",
    tags: ["Python", "OpenCV", "AI", "Machine Learning"],
    github: "https://github.com/prakashorigin/Video-Intelligence-System",
    live: "https://github.com/prakashorigin/Video-Intelligence-System#demo",
    category: "backend",
    featured: true,
    date: "2025-05",
    difficulty: "Advanced",
  },
  {
    id: 3,
    title: "Car Racing Game",
    description:
      "Fast-paced car racing game built with vanilla JavaScript and HTML5 Canvas. Features smooth keyboard controls, procedurally generated obstacles, increasing difficulty levels, collision detection, and smooth animations for engaging gameplay.",
    image: "/projects/car-racing.svg",
    tags: ["JavaScript", "HTML5 Canvas", "CSS", "Game Dev"],
    github: "https://github.com/prakashorigin/Car-Racing-Game",
    live: "https://car-racing-game.vercel.app",
    category: "game",
    date: "2025-04",
    difficulty: "Intermediate",
  },
  {
    id: 4,
    title: "Tic Tac Toe",
    description:
      "Classic Tic Tac Toe game with Python Flask backend and responsive HTML/CSS frontend. Features player vs player mode, AI opponent with minimax algorithm, win detection logic, game history tracking, and clean UI for seamless gameplay.",
    image: "/projects/tic-tac-toe.svg",
    tags: ["Python", "Flask", "HTML", "CSS"],
    github: "https://github.com/prakashorigin/tic-tac-toe",
    live: "https://tictactoe-prakash.vercel.app",
    category: "game",
    date: "2025-03",
    difficulty: "Beginner",
  },
  {
    id: 5,
    title: "Rock Paper Scissor",
    description:
      "Interactive Rock Paper Scissors game built with Python featuring intelligent AI opponent using probability analysis, real-time score tracking, game statistics, and clean command-line interface with session history.",
    image: "/projects/rock-paper-scissor.svg",
    tags: ["Python", "Game Logic", "CLI"],
    github: "https://github.com/prakashorigin/rock-paper-scissor",
    live: "https://github.com/prakashorigin/rock-paper-scissor",
    category: "game",
    date: "2025-02",
    difficulty: "Beginner",
  },
  {
    id: 6,
    title: "Rent Calculator",
    description:
      "Practical rent calculator application with Python backend and responsive web interface. Enables quick rent splitting among roommates, expense tracking, detailed breakdowns, payment reminders, and financial summary reports.",
    image: "/projects/rent-calculator.svg",
    tags: ["Python", "Flask", "HTML", "CSS"],
    github: "https://github.com/prakashorigin/rent-calculator",
    live: "https://rent-calculator-prakash.vercel.app",
    category: "frontend",
    date: "2025-01",
    difficulty: "Beginner",
  },
  {
    id: 7,
    title: "Portfolio Website",
    description:
      "Modern, responsive developer portfolio built with Next.js 16, Tailwind CSS, and Framer Motion animations. Features dark mode toggle, particle background effects, smooth scrolling, project filtering, contact form integration, and optimized SEO.",
    image: "/projects/portfolio-site.svg",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    github: "https://github.com/prakashorigin/portfolio-website",
    live: "https://prakash-portfolio.vercel.app",
    category: "frontend",
    featured: true,
    date: "2025-07",
    difficulty: "Intermediate",
  },
  {
    id: 8,
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce application with comprehensive product catalog, shopping cart management, secure JWT authentication, payment integration (Stripe), order tracking, admin dashboard, and review system.",
    image: "/projects/ecommerce-app.svg",
    tags: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    github: "https://github.com/prakashorigin/ecommerce-app",
    live: "https://ecommerce-prakash.vercel.app",
    category: "fullstack",
    featured: true,
    date: "2025-08",
    difficulty: "Advanced",
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
