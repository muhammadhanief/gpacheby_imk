import React from "react";
import TemplateBerita from "@/components/tentang-kami/TemplateBerita";

const Data = {
  title: "Perlengkapan",
  imagesrc: "/foto-seksi/perkap.png",
  content: [
    "Seksi Perlengkapan memiliki cakupan tugas, antara lain sebagai berikut :",
    "- Melakukan pencatatan inventaris GPA Cheby",
    "- Memastikan alat dan perlengkapan GPA Cheby bersih dan terawat",
    "- Melakukan pelatihan Internal",
    "- Mengatur prosedur peminjaman alat dan web",
  ],
  nextpagetitle: "Pertolongan Pertana dan SAR",
  nextpagelink: "sie/pp-sar",
};

export default function page() {
  return (
    <main>
      <title>Perlengkapan | GPA CHEBY</title>
      <TemplateBerita {...Data}></TemplateBerita>
    </main>
  );
}
