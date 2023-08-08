import Overlay from "@/components/Overlay/Overlay";
import SectionSeparator from "@/components/Separators/SectionSeparator";
import Hero from "@/features/Hero/components/Hero";
import Projects from "@/features/Projects/components/Projects";
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
    </main>
  );
}
