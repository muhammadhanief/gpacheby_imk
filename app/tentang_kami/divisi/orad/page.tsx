import React from "react";
import TemplateBerita from "@/components/tentang-kami/TemplateBerita";

const Data = {
  title: "Olahraga Arus Deras",
  imagesrc: "/foto-divisi/orad.jpeg",
  content: [
    "Divisi ORAD adalah salah satu divisi di GPA Cheby yang bergerak di bidang Olahraga Arus Deras (ORAD). Divisi ini diharapkan bisa menjadi wadah untuk menyalurkan minat anggota yang tertarik dengan bidang olahraga air.",
    "Divisi ini membawahi olahraga ekstrem yang bertujuan untuk mengarungi sungai. Dalam pelaksanaan olahraga ini dibutuhkan teknik yang terasah, kemampuan kepemimpinan dan kerjasama tim yang kuat. Untuk itu, Divisi ORAD juga bertanggung jawab dalam pelaksanaan pelatihan internal terkait olahraga arus deras. Selain itu diadakan latihan renang rutin bagi seluruh anggota GPA Cheby sebagai bekal dalam kegiatan olahraga air.",
    "Tidak hanya arung jeram, divisi ini juga berencana melakukan latihan dayung dan SAR bersama.",
  ],
  nextpagetitle: "Pengabdian Masyarakat",
  nextpagelink: "divisi/pengabdian-masyarakat",
};

export default function page() {
  return (
    <main>
      <title>Olahraga Arus Deras | GPA CHEBY</title>
      <TemplateBerita {...Data}></TemplateBerita>
    </main>
  );
}
