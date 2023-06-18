import React from "react";
import TemplateBerita from "@/components/tentang-kami/TemplateBerita";

const Data = {
  title: "Pengabdian Masyarakat",
  imagesrc: "/foto-divisi/gh.JPG",
  content: ["wdawdwd", "wdawdwddwaaa"],
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
