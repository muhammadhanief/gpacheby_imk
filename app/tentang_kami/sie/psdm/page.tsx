import React from "react";
import TemplateBerita from "@/components/tentang-kami/TemplateBerita";

const Data = {
  title: "Pengembangan Sumber Daya Manusia",
  imagesrc: "/foto-seksi/psdm.png",
  content: [
    "Seksi PSDM memiliki cakupan tugas, antara lain sebagai berikut :",
    "- Bertanggung jawab terhadap penyusunan artikel serta pelaksanaan pelatihan internal setiap sie & divisi ",
    "- Melakukan rekapitulasi ilmu dari setiap sie dan divisi selama pelatihan Internal dan membukukannya",
    "- Membuat Kartu Tanda Anggota (KTA)",
    "- Menjadwalkan kegiatan Pisah Angkatan dan HUT GPA Cheby",
    "- Pengadaan Pakaian Dinas Lapangan (PDL)",
  ],
  nextpagetitle: "Gunung dan Hutan",
  nextpagelink: "divisi/gunung-hutan",
};

export default function page() {
  return (
    <main>
      <title>PSDM | GPA CHEBY</title>
      <TemplateBerita {...Data}></TemplateBerita>
    </main>
  );
}
