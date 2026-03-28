export interface TechStackItem {
  id: number;
  year: string;
  title: string;
  description: string;
  technologies: string[];
}

export const techStackTimeline: TechStackItem[] = [
  {
    id: 1,
    year: "2024",
    title: "Frontend Mastery",
    description:
      "Specialized in React, Next.js, and modern CSS frameworks. Developed responsive, interactive UIs with state management and animations.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 2,
    year: "2024-2025",
    title: "Full-Stack Development",
    description:
      "Expanded into backend development with Node.js and Express. Built scalable APIs and integrated databases for full-stack applications.",
    technologies: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs"],
  },
  {
    id: 3,
    year: "2025",
    title: "AI & Computer Vision",
    description:
      "Explored machine learning and computer vision. Developed intelligent systems for video analysis and object detection using Python.",
    technologies: ["Python", "OpenCV", "TensorFlow", "Machine Learning", "AI"],
  },
];
