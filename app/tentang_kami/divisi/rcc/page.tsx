import React from "react";
import TemplateBerita from "@/components/tentang-kami/TemplateBerita";

const Data = {
  title: "Rock Climbing and Caving",
  imagesrc: "/foto-divisi/rcc.png",
  content: [
    "Divisi Rock Climbing dan Caving merupakan salah satu dari empat divisi yang ada di GPA Cheby. Sesuai namanya, divisi ini bergerak di bidang climbing dan caving, namun saat ini masih lebih berfokus pada kegiatan climbingnya saja.",
    "Divisi Rock Climbing dan Caving diupayakan dapat menjadi wadah belajar bagi seluruh mahasiswa Politeknik Statistika STIS pada umumnya dan anggota GPA Cheby pada khususnya. Terutama dalam pembelajaran mendalami teknik-teknik memanjat, pengenalan alat alat climbing dan penggunaannya,  memperkuat pemahaman mengenai tebing dan gua, serta hal lain terkait panjat tebing dan caving. Untuk itu dilakukan pelatihan internal bagi anggota yang dilaksanakan langsung di GOR Ciracas untuk langsung di praktikkan.",
    "Dengan adanya pelatihan, diharapkan dapat menjadi wadah untuk mengembangkan bakat di bidang wall climbing. Sehingga dengan adanya bekal latihan ini, anggota GPA Cheby maupun mahasiswa Politeknik Statistika STIS lainnya dapat berpartisipasi dan meraih prestasi di OPTK (Olimpiade Perguruan Tinggi Kedinasan) cabang olahraga wall climbing dan mengharumkan nama Polstat-STIS.",
    "Sampai saat ini, setidaknya ada beberapa prestasi yang diraih oleh GPA Cheby dalam cabang olahraga wall climbing, diantaranya sebagai berikut :",
    "<ul><li>Juara 1 OPTK 2018</li><li>Juara 2 OPTK 2019</li><li>Juara 3 OPTK 2020</li></ul>",
  ],
  nextpagetitle: "Kepengurusan",
  nextpagelink: "kepengurusan",
};

export default function page() {
  return (
    <main>
      <title>Gunung Hutan | GPA CHEBY</title>
      <TemplateBerita {...Data}></TemplateBerita>
    </main>
  );
}
