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
    "1. Peraih medali perunggu kategori boulder putri OPTK 2012",
    "2. Peraih medali perunggu kategori speed putra OPTK 2014",
    "3. Peraih medali perunggu kategori lead putri OPTK 2014",
    "4. Peraih medali perak kategori speed putri OPTK 2015",
    "5. Peraih medali emas kategori lead putra OPTK 2016 ",
    "6. Peraih medali perak kategori lead putri OPTK 2017",
  ],
  nextpagetitle: "Hubungan Masyarakat",
  nextpagelink: "sie/humas",
};

export default function page() {
  return (
    <main>
      <title>Rock Climbing and Caving| GPA CHEBY</title>
      <TemplateBerita {...Data}></TemplateBerita>
    </main>
  );
}
