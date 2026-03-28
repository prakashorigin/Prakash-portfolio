export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Anderson",
    role: "Product Manager",
    company: "TechStartup Inc",
    content:
      "Prakash delivered an exceptional e-commerce platform that exceeded our expectations. His attention to detail, clean code, and communication throughout the project were outstanding. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=1",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "Digital Solutions Ltd",
    content:
      "Working with Prakash was a game-changer for our business. He not only built what we asked for but also suggested improvements that significantly enhanced our product. A true professional.",
    image: "https://i.pravatar.cc/150?img=2",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "Creative Agency Co",
    content:
      "Prakash's expertise in React and Next.js is impressive. He completed our portfolio redesign ahead of schedule and the results speak for themselves. Great collaborator and problem-solver.",
    image: "https://i.pravatar.cc/150?img=3",
    rating: 5,
  },
  {
    id: 4,
    name: "James Wilson",
    role: "CTO",
    company: "Enterprise Solutions",
    content:
      "The video intelligence system Prakash developed has become crucial to our operations. His knowledge of AI and computer vision is exceptional. Looking forward to future collaborations.",
    image: "https://i.pravatar.cc/150?img=4",
    rating: 5,
  },
];
