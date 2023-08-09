import Overlay from "@/components/Overlay/Overlay";
import SectionSeparator from "@/components/Separators/SectionSeparator";
import About from "@/features/About/components/About";
import Footer from "@/features/Footer/components/Footer";
import Hero from "@/features/Hero/components/Hero";
import Projects from "@/features/Projects/components/Projects";
import Skills from "@/features/Skills/components/Skills";
import WorkExperience from "@/features/WorkExperience/components/WorkExperience";
import { GlobalStyles } from "@/styles/GlobalStyles";

export default function Home() {
  return (
    <main>
      <GlobalStyles />
      <Overlay />
      <Hero />
      <SectionSeparator />
      <Projects />
      <SectionSeparator />
      <WorkExperience />
      <SectionSeparator />
      <Skills />
      <SectionSeparator />
      <About />
      <Footer />
    </main>
  );
}
