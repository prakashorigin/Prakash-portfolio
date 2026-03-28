import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import TechStackTimeline from "@/components/TechStackTimeline";
import Testimonials from "@/components/Testimonials";
import Blog from "@/components/Blog";
import GitHubSection from "@/components/GitHubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <ParticleBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <TechStackTimeline />
      <Testimonials />
      <Blog />
      <GitHubSection />
      <Contact />
      <Footer />
    </main>
  );
}
