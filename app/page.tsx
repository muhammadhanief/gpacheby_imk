"use client";
import Hero from "@/components/landing-page/hero";
import Peminatan from "@/components/landing-page/peminatan";
import PengurusHarian from "@/components/landing-page/pengurus-harian";
import Artikel from "@/components/landing-page/artikel-kegiatan";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  return (
    <main>
      <title>GPA CHEBY - MAPALA Politeknik Statistika STIS Jakarta</title>
      <Hero />
      <PengurusHarian />
      <Peminatan />
      <Artikel />
    </main>
  );
}
