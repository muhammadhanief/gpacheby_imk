import { ArticleCardProps } from "@/app/artikel/kegiatan/page";
import { NextResponse } from "next/server";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || 1;
  const limit = searchParams.get("limit") || 4;
  const offset = (Number(page) - 1) * Number(limit);
  const data = ARTICLES.slice(offset, offset + Number(limit));

  return NextResponse.json({
    data,
    meta: {
      total: ARTICLES.length,
      page: Number(page),
      limit: Number(limit),
      last_page: Math.ceil(ARTICLES.length / Number(limit)),
    },
  });
}

const ARTICLES: ArticleCardProps[] = [
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan",
  },
  {
    title: "Hari Tanpa Tembakau Sedunia : “We Need Food, Not Tobacco”",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Sejarah Hari Tanpa Tembakau Sedunia Hari Tanpa Tembakau Sedunia dicetuskan oleh Organisasi Kesehatan Dunia (WHO) pada tahun 1987. ",
    thumbnail: "/artikel/peringatan/tobacco.png",
    href: "/artikel/hari_penting/children_hari_penting",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan",
  },
  {
    title: "Hari Tanpa Tembakau Sedunia : “We Need Food, Not Tobacco”",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Sejarah Hari Tanpa Tembakau Sedunia Hari Tanpa Tembakau Sedunia dicetuskan oleh Organisasi Kesehatan Dunia (WHO) pada tahun 1987. ",
    thumbnail: "/artikel/peringatan/tobacco.png",
    href: "/artikel/hari_penting/children_hari_penting",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan",
  },
  {
    title: "Hari Tanpa Tembakau Sedunia : “We Need Food, Not Tobacco”",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Sejarah Hari Tanpa Tembakau Sedunia Hari Tanpa Tembakau Sedunia dicetuskan oleh Organisasi Kesehatan Dunia (WHO) pada tahun 1987. ",
    thumbnail: "/artikel/peringatan/tobacco.png",
    href: "/artikel/hari_penting/children_hari_penting",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan",
  },
  {
    title: "Hari Tanpa Tembakau Sedunia : “We Need Food, Not Tobacco”",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Sejarah Hari Tanpa Tembakau Sedunia Hari Tanpa Tembakau Sedunia dicetuskan oleh Organisasi Kesehatan Dunia (WHO) pada tahun 1987. ",
    thumbnail: "/artikel/peringatan/tobacco.png",
    href: "/artikel/hari_penting/children_hari_penting",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan",
  },
];
