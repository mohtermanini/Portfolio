import Overlay from "@/components/Overlay/Overlay";
import Hero from "@/features/Hero/components/Hero";
import { GlobalStyles } from "@/styles/GlobalStyles";

export default function Home() {
  return (
    <main>
      <GlobalStyles />
      <Overlay />
      <Hero />
    </main>
  );
}
