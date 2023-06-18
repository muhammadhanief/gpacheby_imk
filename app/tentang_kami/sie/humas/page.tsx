import React from "react";
import TemplateBerita from "@/components/tentang-kami/TemplateBerita";

const Data = {
  title: "Hubungan Masyarakat",
  imagesrc: "/foto-seksi/hpd.png",
  content: [
    "Seksi Humas memiliki cakupan tugas, antara lain sebagai berikut :",
    "- Mempublikasikan kegiatan Cheby kepada masyarakat luas",
    "- Mengelola dan merawat media sosial serta website GPA Cheby",
    "- Membuat database anggota",
    "- Melakukan kegiatan pelatihan mengelola web dan design kepada anggota HUMAS",
  ],
  nextpagetitle: "Perlengkapan",
  nextpagelink: "sie/perkap",
};

export default function page() {
  return (
    <main>
      <title>Hubungan Masyarakat | GPA CHEBY</title>
      <TemplateBerita {...Data}></TemplateBerita>
    </main>
  );
}
