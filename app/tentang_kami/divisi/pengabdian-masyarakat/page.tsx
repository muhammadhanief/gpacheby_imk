import React from "react";
import TemplateBerita from "@/components/tentang-kami/TemplateBerita";

const Data = {
  title: "Pengabdian Masyarakat",
  imagesrc: "/foto-divisi/pengmas.png",
  content: [
    "Divisi Pengabdian Masyarakat adalah salah satu dari empat divisi di GPA Cheby yang fokusnya berhubungan langsung dengan masyarakat. Sesuai namanya, divisi ini merupakan salah satu wadah dalam penyelenggaraan poin ketiga Tridharma Perguruan Tinggi, pengabdian pada masyarakat.",
    "Divisi ini diharapkan dapat mewujudkan tujuan untuk membangun kesadaran bahwa sebagai mahasiswa pada khususnya dan manusia pada umumnya mempunyai tanggung jawab dalam meningkatkan kualitas hidup masyarakat dan membawa kebermanfaatan bagi sesama. Tujuan ini dapat terlaksana melalui kegiatan yang direncanakan divisi pengmas, antara lain kegiatan bakti sosial dan rumah singgah yang berisi kegiatan mengajar, bermain bersama, melakukan penggalangan dana dan lain-lain yang pada tahun dilakukan di Yayasan Erbe Jakarta Timur.",
  ],
  nextpagetitle: "Rock Climbing and Caving",
  nextpagelink: "divisi/rcc",
};

export default function page() {
  return (
    <main>
      <title>Pengabdian Masyarakat | GPA CHEBY</title>
      <TemplateBerita {...Data}></TemplateBerita>
    </main>
  );
}
