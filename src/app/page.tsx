import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ExperienceSection from "@/components/experience";
import Projects from "@/components/projects";
import ContactForm from "@/components/contact";
import Footer from "@/components/footer";
import Sound from "@/components/sound";

export default function Home() {
  return (
    <main className="bg-cyan-950 text-white">
      <Sound />
      <Navbar />
      <Hero />
      <ExperienceSection />
      <Projects />
      <ContactForm />
      <Footer />
    </main>
  );
}
