import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import FeaturedCaseStudy from "@/components/FeaturedCaseStudy";
import Skills from "@/components/Skills";
import AISection from "@/components/AISection";
import Projects from "@/components/Projects";
import CareerTimeline from "@/components/CareerTimeline";
import Leadership from "@/components/Leadership";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <FeaturedCaseStudy />
        <Skills />
        <AISection />
        <Projects />
        <CareerTimeline />
        <Leadership />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
