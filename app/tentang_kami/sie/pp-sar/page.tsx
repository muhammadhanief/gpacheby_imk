import React from "react";
import TemplateBerita from "@/components/tentang-kami/TemplateBerita";

const Data = {
  title: "Pertolongan Pertana dan SAR",
  imagesrc: "/foto-seksi/pp.png",
  content: [
    "Seksi PP dan SAR memiliki cakupan tugas, antara lain sebagai berikut :",
    "- Melakukan kegiatan Cheby sehat bersama anggota ",
    "- Melakukan pelatihan internal dan eksternal terkait materi dan pelaksanaan Pertolongan Pertama ",
    "- Melakukan manajemen obat dan alat PP GPA Cheby",
  ],
  nextpagetitle: "Pengembangan Sumber Daya Manusia",
  nextpagelink: "sie/psdm",
};

export default function page() {
  return (
    <main>
      <title>PP & SAR | GPA CHEBY</title>
      <TemplateBerita {...Data}></TemplateBerita>
    </main>
  );
}
