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
    href: "/artikel/kegiatan/children_kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan/children_kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan/children_kegiatan",
  },

  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan/children_kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan/children_kegiatan",
  },

  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan/children_kegiatan",
  },

  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan/children_kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan/children_kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan/children_kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan/children_kegiatan",
  },

  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan/children_kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan/children_kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan/children_kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan/children_kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan/children_kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan/children_kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan/children_kegiatan",
  },
  {
    title: "Pelantikan Anggota Muda GPA Cheby Angkatan 46",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Pelantikan Anggota Muda GPA Cheby Angkatan 46 Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda GPA Cheby Angkatan 46. ",
    thumbnail: "/artikel/kegiatan/pelantikan-AM.jpeg",
    href: "/artikel/kegiatan/children_kegiatan",
  },
];
