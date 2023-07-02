"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Hero from "@/components/catatan-perjalanan/hero";
import axios from "axios";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function Page() {
  const [articles, setArticles] = React.useState<ArticleCardProps[]>([]);
  const [meta, setMeta] = React.useState<any>({
    total: 0,
    page: 1,
    limit: 4,
    last_page: 1,
  });

  React.useEffect(() => {
    axios
      .get(`/api/catatan-perjalanan?page=${meta.page}&limit=${meta.limit}`)
      .then((res) => {
        setArticles(res.data.data);
        setMeta(res.data.meta);
      });
  }, [meta.page]);
  return (
    <main>
      <title>Catatan Perjalanan | GPA CHEBY</title>
      <div>
        <Hero />
        <div className="bg-white w-full py-3 text-black">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row">
              {articles.map((article) => (
                <Link className="p-3" key={article.date} href={article.href}>
                  <ArticleCard {...article} />
                </Link>
              ))}
            </div>
            <div className="flex justify-center gap-2 ">
              <button
                className="cursor-pointer w-8 h-8 "
                onClick={() => {
                  setMeta({ ...meta, page: meta.page - 1 });
                }}
                disabled={meta.page === 1}
              >
                <ChevronLeftIcon />
              </button>

              {meta.page > 0 &&
                new Array(meta.last_page).fill(0).map((_, i) => (
                  <button
                    className="cursor-pointer w-8 h-8"
                    key={i}
                    onClick={() => {
                      setMeta({ ...meta, page: i + 1 });
                    }}
                  >
                    {i + 1}
                  </button>
                ))}
              <button
                className="cursor-pointer w-8 h-8"
                onClick={() => {
                  setMeta({ ...meta, page: meta.page + 1 });
                }}
                disabled={meta.page === meta.last_page}
              >
                <ChevronRightIcon />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

interface ArticleCardProps {
  title: string;
  label: string;
  date: string;
  description: string;
  thumbnail: string;
  href: string;
}

const ArticleCard: FC<ArticleCardProps> = ({
  title,
  label,
  date,
  description,
  thumbnail,
  href,
}) => {
  return (
    <div className="bg-black p-6 rounded-xl  gap-4">
      <div className="relative rounded mx-auto shrink-0 w-44 h-64 mb-3">
        <Image
          src={thumbnail}
          alt={title}
          fill
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
      <div className="flex flex-col gap-4 w-full relative">
        <div className="flex justify-between w-full text-sm">
          <div className="text-cheby">{label}</div>
          <div className="text-green-300">{date}</div>
        </div>
        <div className="text-xl text-white">
          <div>{title}</div>
        </div>
        <div className="text-gray-100">{description}</div>

        {/* <Link
          className="absolute right-0 bottom-0 bg-cheby text-black p-4 rounded flex items-center gap-2 hover:no-underline hover:bg-white group"
          href={href}
        >
          Selengkapnya{" "}
          <ChevronRightIcon className="h-4 w-4 text-black group-hover:translate-x-1 duration-300" />
        </Link> */}
      </div>
    </div>
  );
};

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
];
