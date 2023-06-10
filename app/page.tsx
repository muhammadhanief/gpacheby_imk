import Hero from "@/components/landing-page/hero";
import Peminatan from "@/components/landing-page/peminatan";
import PengurusHarian from "@/components/landing-page/pengurus-harian";

export default function Home() {
  return (
    <main>
      <Hero />
      <PengurusHarian />
      <Peminatan />
    </main>
  );
}
