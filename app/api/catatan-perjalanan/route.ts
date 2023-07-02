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
    title: "Pendakian Internal 2022: Gunung Ciremai",
    label: "Catatan Perjalanan",
    date: "31 Mei 2022",
    description:
      "CATATAN PERJALANAN PI 26 Desember 2022 Pada hari Senin, 26 Desember 2022, GPA Cheby melaksanakan pendakian internal dengan jumlah anggota pendakian sebanyak 28 orang. Tempat pendakian kali ini adalah Gunung Ciremai melalui jalur Apuy. Sesuai kesepakatan, anggota pendakian berkumpul di depan kampus tepatnya di sebelah masjid kampus pada selang waktu pukul 23.00 hingga pukul 00.00",
    thumbnail: "/catatan-perjalanan/pi-ciremai.png",
    href: "/catatan_perjalanan/pi-ciremai-2022",
  },
  {
    title: "Pendakian Internal 1 2019: Gunung Guntur",
    label: "Catatan Perjalanan",
    date: "31 Mei 2019",
    description:
      "Ditulis oleh: Alfira Meilawijaya 22 Maret 2019 Jumat malam tanggal 22 Maret 2019, kami yang bejumlah 29 orang berkumpul di GOR Otista Jaktim. Pukul 18.30 kami sepakat untuk sudah berada di tempat. Namun masih banyak yang belum datang dikarenakan suatu hal. Sampai azan isya berkumandang, kami pun yang sudah berada di GOR memutuskan untuk menunaikan",
    thumbnail: "/catatan-perjalanan/pi-guntur.png",
    href: "/catatan_perjalanan/pi-guntur-2019",
  },
  {
    title: "Pendakian Internal 2022: Gunung Ciremai",
    label: "Catatan Perjalanan",
    date: "31 Mei 2022",
    description:
      "CATATAN PERJALANAN PI 26 Desember 2022 Pada hari Senin, 26 Desember 2022, GPA Cheby melaksanakan pendakian internal dengan jumlah anggota pendakian sebanyak 28 orang. Tempat pendakian kali ini adalah Gunung Ciremai melalui jalur Apuy. Sesuai kesepakatan, anggota pendakian berkumpul di depan kampus tepatnya di sebelah masjid kampus pada selang waktu pukul 23.00 hingga pukul 00.00",
    thumbnail: "/catatan-perjalanan/pi-ciremai.png",
    href: "/catatan_perjalanan/pi-ciremai-2022",
  },
  {
    title: "Pendakian Internal 1 2019: Gunung Guntur",
    label: "Catatan Perjalanan",
    date: "31 Mei 2019",
    description:
      "Ditulis oleh: Alfira Meilawijaya 22 Maret 2019 Jumat malam tanggal 22 Maret 2019, kami yang bejumlah 29 orang berkumpul di GOR Otista Jaktim. Pukul 18.30 kami sepakat untuk sudah berada di tempat. Namun masih banyak yang belum datang dikarenakan suatu hal. Sampai azan isya berkumandang, kami pun yang sudah berada di GOR memutuskan untuk menunaikan",
    thumbnail: "/catatan-perjalanan/pi-guntur.png",
    href: "/catatan_perjalanan/pi-guntur-2019",
  },
  {
    title: "Pendakian Internal 2022: Gunung Ciremai",
    label: "Catatan Perjalanan",
    date: "31 Mei 2022",
    description:
      "CATATAN PERJALANAN PI 26 Desember 2022 Pada hari Senin, 26 Desember 2022, GPA Cheby melaksanakan pendakian internal dengan jumlah anggota pendakian sebanyak 28 orang. Tempat pendakian kali ini adalah Gunung Ciremai melalui jalur Apuy. Sesuai kesepakatan, anggota pendakian berkumpul di depan kampus tepatnya di sebelah masjid kampus pada selang waktu pukul 23.00 hingga pukul 00.00",
    thumbnail: "/catatan-perjalanan/pi-ciremai.png",
    href: "/catatan_perjalanan/pi-ciremai-2022",
  },
  {
    title: "Pendakian Internal 1 2019: Gunung Guntur",
    label: "Catatan Perjalanan",
    date: "31 Mei 2019",
    description:
      "Ditulis oleh: Alfira Meilawijaya 22 Maret 2019 Jumat malam tanggal 22 Maret 2019, kami yang bejumlah 29 orang berkumpul di GOR Otista Jaktim. Pukul 18.30 kami sepakat untuk sudah berada di tempat. Namun masih banyak yang belum datang dikarenakan suatu hal. Sampai azan isya berkumandang, kami pun yang sudah berada di GOR memutuskan untuk menunaikan",
    thumbnail: "/catatan-perjalanan/pi-guntur.png",
    href: "/catatan_perjalanan/pi-guntur-2019",
  },
  {
    title: "Pendakian Internal 2022: Gunung Ciremai",
    label: "Catatan Perjalanan",
    date: "31 Mei 2022",
    description:
      "CATATAN PERJALANAN PI 26 Desember 2022 Pada hari Senin, 26 Desember 2022, GPA Cheby melaksanakan pendakian internal dengan jumlah anggota pendakian sebanyak 28 orang. Tempat pendakian kali ini adalah Gunung Ciremai melalui jalur Apuy. Sesuai kesepakatan, anggota pendakian berkumpul di depan kampus tepatnya di sebelah masjid kampus pada selang waktu pukul 23.00 hingga pukul 00.00",
    thumbnail: "/catatan-perjalanan/pi-ciremai.png",
    href: "/catatan_perjalanan/pi-ciremai-2022",
  },
  {
    title: "Pendakian Internal 1 2019: Gunung Guntur",
    label: "Catatan Perjalanan",
    date: "31 Mei 2019",
    description:
      "Ditulis oleh: Alfira Meilawijaya 22 Maret 2019 Jumat malam tanggal 22 Maret 2019, kami yang bejumlah 29 orang berkumpul di GOR Otista Jaktim. Pukul 18.30 kami sepakat untuk sudah berada di tempat. Namun masih banyak yang belum datang dikarenakan suatu hal. Sampai azan isya berkumandang, kami pun yang sudah berada di GOR memutuskan untuk menunaikan",
    thumbnail: "/catatan-perjalanan/pi-guntur.png",
    href: "/catatan_perjalanan/pi-guntur-2019",
  },
  {
    title: "Pendakian Internal 2022: Gunung Ciremai",
    label: "Catatan Perjalanan",
    date: "31 Mei 2022",
    description:
      "CATATAN PERJALANAN PI 26 Desember 2022 Pada hari Senin, 26 Desember 2022, GPA Cheby melaksanakan pendakian internal dengan jumlah anggota pendakian sebanyak 28 orang. Tempat pendakian kali ini adalah Gunung Ciremai melalui jalur Apuy. Sesuai kesepakatan, anggota pendakian berkumpul di depan kampus tepatnya di sebelah masjid kampus pada selang waktu pukul 23.00 hingga pukul 00.00",
    thumbnail: "/catatan-perjalanan/pi-ciremai.png",
    href: "/catatan_perjalanan/pi-ciremai-2022",
  },
  {
    title: "Pendakian Internal 1 2019: Gunung Guntur",
    label: "Catatan Perjalanan",
    date: "31 Mei 2019",
    description:
      "Ditulis oleh: Alfira Meilawijaya 22 Maret 2019 Jumat malam tanggal 22 Maret 2019, kami yang bejumlah 29 orang berkumpul di GOR Otista Jaktim. Pukul 18.30 kami sepakat untuk sudah berada di tempat. Namun masih banyak yang belum datang dikarenakan suatu hal. Sampai azan isya berkumandang, kami pun yang sudah berada di GOR memutuskan untuk menunaikan",
    thumbnail: "/catatan-perjalanan/pi-guntur.png",
    href: "/catatan_perjalanan/pi-guntur-2019",
  },
  {
    title: "Pendakian Internal 2022: Gunung Ciremai",
    label: "Catatan Perjalanan",
    date: "31 Mei 2022",
    description:
      "CATATAN PERJALANAN PI 26 Desember 2022 Pada hari Senin, 26 Desember 2022, GPA Cheby melaksanakan pendakian internal dengan jumlah anggota pendakian sebanyak 28 orang. Tempat pendakian kali ini adalah Gunung Ciremai melalui jalur Apuy. Sesuai kesepakatan, anggota pendakian berkumpul di depan kampus tepatnya di sebelah masjid kampus pada selang waktu pukul 23.00 hingga pukul 00.00",
    thumbnail: "/catatan-perjalanan/pi-ciremai.png",
    href: "/catatan_perjalanan/pi-ciremai-2022",
  },
  {
    title: "Pendakian Internal 1 2019: Gunung Guntur",
    label: "Catatan Perjalanan",
    date: "31 Mei 2019",
    description:
      "Ditulis oleh: Alfira Meilawijaya 22 Maret 2019 Jumat malam tanggal 22 Maret 2019, kami yang bejumlah 29 orang berkumpul di GOR Otista Jaktim. Pukul 18.30 kami sepakat untuk sudah berada di tempat. Namun masih banyak yang belum datang dikarenakan suatu hal. Sampai azan isya berkumandang, kami pun yang sudah berada di GOR memutuskan untuk menunaikan",
    thumbnail: "/catatan-perjalanan/pi-guntur.png",
    href: "/catatan_perjalanan/pi-guntur-2019",
  },
  {
    title: "Pendakian Internal 2022: Gunung Ciremai",
    label: "Catatan Perjalanan",
    date: "31 Mei 2022",
    description:
      "CATATAN PERJALANAN PI 26 Desember 2022 Pada hari Senin, 26 Desember 2022, GPA Cheby melaksanakan pendakian internal dengan jumlah anggota pendakian sebanyak 28 orang. Tempat pendakian kali ini adalah Gunung Ciremai melalui jalur Apuy. Sesuai kesepakatan, anggota pendakian berkumpul di depan kampus tepatnya di sebelah masjid kampus pada selang waktu pukul 23.00 hingga pukul 00.00",
    thumbnail: "/catatan-perjalanan/pi-ciremai.png",
    href: "/catatan_perjalanan/pi-ciremai-2022",
  },
  {
    title: "Pendakian Internal 1 2019: Gunung Guntur",
    label: "Catatan Perjalanan",
    date: "31 Mei 2019",
    description:
      "Ditulis oleh: Alfira Meilawijaya 22 Maret 2019 Jumat malam tanggal 22 Maret 2019, kami yang bejumlah 29 orang berkumpul di GOR Otista Jaktim. Pukul 18.30 kami sepakat untuk sudah berada di tempat. Namun masih banyak yang belum datang dikarenakan suatu hal. Sampai azan isya berkumandang, kami pun yang sudah berada di GOR memutuskan untuk menunaikan",
    thumbnail: "/catatan-perjalanan/pi-guntur.png",
    href: "/catatan_perjalanan/pi-guntur-2019",
  },
  {
    title: "Pendakian Internal 2022: Gunung Ciremai",
    label: "Catatan Perjalanan",
    date: "31 Mei 2022",
    description:
      "CATATAN PERJALANAN PI 26 Desember 2022 Pada hari Senin, 26 Desember 2022, GPA Cheby melaksanakan pendakian internal dengan jumlah anggota pendakian sebanyak 28 orang. Tempat pendakian kali ini adalah Gunung Ciremai melalui jalur Apuy. Sesuai kesepakatan, anggota pendakian berkumpul di depan kampus tepatnya di sebelah masjid kampus pada selang waktu pukul 23.00 hingga pukul 00.00",
    thumbnail: "/catatan-perjalanan/pi-ciremai.png",
    href: "/catatan_perjalanan/pi-ciremai-2022",
  },
  {
    title: "Pendakian Internal 1 2019: Gunung Guntur",
    label: "Catatan Perjalanan",
    date: "31 Mei 2019",
    description:
      "Ditulis oleh: Alfira Meilawijaya 22 Maret 2019 Jumat malam tanggal 22 Maret 2019, kami yang bejumlah 29 orang berkumpul di GOR Otista Jaktim. Pukul 18.30 kami sepakat untuk sudah berada di tempat. Namun masih banyak yang belum datang dikarenakan suatu hal. Sampai azan isya berkumandang, kami pun yang sudah berada di GOR memutuskan untuk menunaikan",
    thumbnail: "/catatan-perjalanan/pi-guntur.png",
    href: "/catatan_perjalanan/pi-guntur-2019",
  },
  {
    title: "Pendakian Internal 2022: Gunung Ciremai",
    label: "Catatan Perjalanan",
    date: "31 Mei 2022",
    description:
      "CATATAN PERJALANAN PI 26 Desember 2022 Pada hari Senin, 26 Desember 2022, GPA Cheby melaksanakan pendakian internal dengan jumlah anggota pendakian sebanyak 28 orang. Tempat pendakian kali ini adalah Gunung Ciremai melalui jalur Apuy. Sesuai kesepakatan, anggota pendakian berkumpul di depan kampus tepatnya di sebelah masjid kampus pada selang waktu pukul 23.00 hingga pukul 00.00",
    thumbnail: "/catatan-perjalanan/pi-ciremai.png",
    href: "/catatan_perjalanan/pi-ciremai-2022",
  },
  {
    title: "Pendakian Internal 1 2019: Gunung Guntur",
    label: "Catatan Perjalanan",
    date: "31 Mei 2019",
    description:
      "Ditulis oleh: Alfira Meilawijaya 22 Maret 2019 Jumat malam tanggal 22 Maret 2019, kami yang bejumlah 29 orang berkumpul di GOR Otista Jaktim. Pukul 18.30 kami sepakat untuk sudah berada di tempat. Namun masih banyak yang belum datang dikarenakan suatu hal. Sampai azan isya berkumandang, kami pun yang sudah berada di GOR memutuskan untuk menunaikan",
    thumbnail: "/catatan-perjalanan/pi-guntur.png",
    href: "/catatan_perjalanan/pi-guntur-2019",
  },
  {
    title: "Pendakian Internal 2022: Gunung Ciremai",
    label: "Catatan Perjalanan",
    date: "31 Mei 2022",
    description:
      "CATATAN PERJALANAN PI 26 Desember 2022 Pada hari Senin, 26 Desember 2022, GPA Cheby melaksanakan pendakian internal dengan jumlah anggota pendakian sebanyak 28 orang. Tempat pendakian kali ini adalah Gunung Ciremai melalui jalur Apuy. Sesuai kesepakatan, anggota pendakian berkumpul di depan kampus tepatnya di sebelah masjid kampus pada selang waktu pukul 23.00 hingga pukul 00.00",
    thumbnail: "/catatan-perjalanan/pi-ciremai.png",
    href: "/catatan_perjalanan/pi-ciremai-2022",
  },
  {
    title: "Pendakian Internal 1 2019: Gunung Guntur",
    label: "Catatan Perjalanan",
    date: "31 Mei 2019",
    description:
      "Ditulis oleh: Alfira Meilawijaya 22 Maret 2019 Jumat malam tanggal 22 Maret 2019, kami yang bejumlah 29 orang berkumpul di GOR Otista Jaktim. Pukul 18.30 kami sepakat untuk sudah berada di tempat. Namun masih banyak yang belum datang dikarenakan suatu hal. Sampai azan isya berkumandang, kami pun yang sudah berada di GOR memutuskan untuk menunaikan",
    thumbnail: "/catatan-perjalanan/pi-guntur.png",
    href: "/catatan_perjalanan/pi-guntur-2019",
  },
  {
    title: "Pendakian Internal 2022: Gunung Ciremai",
    label: "Catatan Perjalanan",
    date: "31 Mei 2022",
    description:
      "CATATAN PERJALANAN PI 26 Desember 2022 Pada hari Senin, 26 Desember 2022, GPA Cheby melaksanakan pendakian internal dengan jumlah anggota pendakian sebanyak 28 orang. Tempat pendakian kali ini adalah Gunung Ciremai melalui jalur Apuy. Sesuai kesepakatan, anggota pendakian berkumpul di depan kampus tepatnya di sebelah masjid kampus pada selang waktu pukul 23.00 hingga pukul 00.00",
    thumbnail: "/catatan-perjalanan/pi-ciremai.png",
    href: "/catatan_perjalanan/pi-ciremai-2022",
  },
  {
    title: "Pendakian Internal 1 2019: Gunung Guntur",
    label: "Catatan Perjalanan",
    date: "31 Mei 2019",
    description:
      "Ditulis oleh: Alfira Meilawijaya 22 Maret 2019 Jumat malam tanggal 22 Maret 2019, kami yang bejumlah 29 orang berkumpul di GOR Otista Jaktim. Pukul 18.30 kami sepakat untuk sudah berada di tempat. Namun masih banyak yang belum datang dikarenakan suatu hal. Sampai azan isya berkumandang, kami pun yang sudah berada di GOR memutuskan untuk menunaikan",
    thumbnail: "/catatan-perjalanan/pi-guntur.png",
    href: "/catatan_perjalanan/pi-guntur-2019",
  },
  {
    title: "Pendakian Internal 2022: Gunung Ciremai",
    label: "Catatan Perjalanan",
    date: "31 Mei 2022",
    description:
      "CATATAN PERJALANAN PI 26 Desember 2022 Pada hari Senin, 26 Desember 2022, GPA Cheby melaksanakan pendakian internal dengan jumlah anggota pendakian sebanyak 28 orang. Tempat pendakian kali ini adalah Gunung Ciremai melalui jalur Apuy. Sesuai kesepakatan, anggota pendakian berkumpul di depan kampus tepatnya di sebelah masjid kampus pada selang waktu pukul 23.00 hingga pukul 00.00",
    thumbnail: "/catatan-perjalanan/pi-ciremai.png",
    href: "/catatan_perjalanan/pi-ciremai-2022",
  },
  {
    title: "Pendakian Internal 1 2019: Gunung Guntur",
    label: "Catatan Perjalanan",
    date: "31 Mei 2019",
    description:
      "Ditulis oleh: Alfira Meilawijaya 22 Maret 2019 Jumat malam tanggal 22 Maret 2019, kami yang bejumlah 29 orang berkumpul di GOR Otista Jaktim. Pukul 18.30 kami sepakat untuk sudah berada di tempat. Namun masih banyak yang belum datang dikarenakan suatu hal. Sampai azan isya berkumandang, kami pun yang sudah berada di GOR memutuskan untuk menunaikan",
    thumbnail: "/catatan-perjalanan/pi-guntur.png",
    href: "/catatan_perjalanan/pi-guntur-2019",
  },
];
