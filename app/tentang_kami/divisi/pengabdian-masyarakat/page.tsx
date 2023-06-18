import React from "react";
import TemplateBerita from "@/components/tentang-kami/TemplateBerita";

const Data = {
  title: "Pengabdian Masyarakat",
  imagesrc: "/foto-divisi/gh.JPG",
  content: [
    "Divisi Gunung Hutan merupakan salah satu divisi yang ada di GPA CHEBY. Divisi ini berfokus pada kegiatan yang berhubungan dengan alam, seperti hiking, camping, dan lain-lain. Divisi ini juga bertanggung jawab atas kegiatan yang berhubungan dengan kelestarian alam, seperti reboisasi, dan lain-lain.",
    "Divisi ini memiliki 3 program kerja, yaitu:",
    "1. Hiking",
    "2. Camping",
    "3. Reboisasi",
  ],
  nextpagetitle: "Kepengurusan",
  nextpagelink: "kepengurusan",
};

export default function page() {
  return (
    <main>
      <title>Pengabdian Masyarakat | GPA CHEBY</title>
      <TemplateBerita {...Data}></TemplateBerita>
    </main>
  );
}
