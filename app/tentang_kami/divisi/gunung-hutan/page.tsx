import React from "react";
import TemplateBerita from "@/components/tentang-kami/TemplateBerita";

const Data = {
  title: "Gunung Hutan",
  imagesrc: "/foto-divisi/gh.JPG",
  content: [
    "Divisi Gunung dan Hutan merupakan salah satu divisi dalam struktur organisasi GPA Cheby yang dibentuk dengan tujuan untuk mendalami dan mengembangkan kegiatan pendakian gunung, penelusuran atau penjelajahan hutan rimba dan alam lainnya. Dalam kegiatannya, divisi GH mengusahakan untuk melakukan pengaplikasian ilmu/teknik kepencintaalaman seperti orientasi medan dan navigasi darat, teknik survival, serta eksplorasi gunung dan hutan rimba.",
    "Setiap anggota Divisi Gunung Hutan dituntut untuk mampu menjadi leader tim dalam setiap kegiatan pendakian/penelusuran gunung hutan, mengedepankan kepentingan kelompok, belajar memiliki kemampuan problem solving yang kuat saat berhadapan dengan permasalahan di alam.",
    "Divisi Gunung dan Hutan memiliki program kerja diantaranya Pendakian Umum Mahasiswa Polstat STIS, Pendakian Internal bagi anggota GPA Cheby serta Pelatihan Internal mengenai gunung hutan bagi anggota.",
    "Adapun gunung-gunung yang pernah didaki oleh para anggota GPA Cheby baik yang berstatus Anggota Muda, Anggota Biasa hingga Anggota Luar Biasa tersebar dari barat hingga timur Pulau Jawa seperti Gunung Gede-Pangrango, Salak, Ciremai, Slamet, Sumbing-Sindoro, Merapi-Merbabu, Lawu, Arjuno-Welirang hingga puncak tertinggi Jawa, Gunung Semeru. Selain itu beberapa anggota GPA Cheby juga pernah mendaki gunung luar Jawa seperti Gunung Kerinci dan Rinjani, bahkan ada salah satu Anggota Luar Biasa (ALB) yang pernah mendaki Gunung Sinai, Mesir.",
  ],
  nextpagetitle: "Olahraga Arus Deras",
  nextpagelink: "/divisi/orad",
};

export default function page() {
  return (
    <main>
      <title>Gunung dan Hutan | GPA CHEBY</title>
      <TemplateBerita {...Data}></TemplateBerita>
    </main>
  );
}
