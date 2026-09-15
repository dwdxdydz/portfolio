import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import CareerTimeline from "@/components/CareerTimeline";
import Experience from "@/components/Experience";
import BusinessAnalytics from "@/components/BusinessAnalytics";
import Engineering from "@/components/Engineering";
import AISection from "@/components/AISection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
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
        <CareerTimeline />
        <Experience />
        <BusinessAnalytics />
        <Engineering />
        <AISection />
        <Projects />
        <Skills />
        <Leadership />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
