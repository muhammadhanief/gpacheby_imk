import React from "react";
import Hero from "@/components/sejarah/hero";
import ContentSejarah from "@/components/sejarah/content-sejarah";
import Mars from "@/components/sejarah/mars";

export default function page() {
  return (
    <main>
      <Hero />
      <ContentSejarah />
      <Mars />
    </main>
  );
}
