import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Hero from "@/components/catatan-perjalanan/hero";

export default function page() {
  return (
    <main>
      <title>Catatan Perjalanan | GPA CHEBY</title>
      <div>
        <Hero />
        <div className="bg-white w-full py-3 text-black">
          <div className="container mx-auto">
            {/* <h1 className="text-2xl text-center uppercase">Kegiatan</h1> */}
            {/* <div className="h-1 bg-cheby w-24 mx-auto mb-5 -mt-4" /> */}
            {/* <div className="justify-end mx-20 max-w-md">
              <form action="" className="relative mx-auto w-max">
                <input
                  type="search"
                  className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-lime-300 focus:pl-16 focus:pr-4"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-500 px-3.5 peer-focus:border-lime-300 peer-focus:stroke-lime-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </form>
            </div> */}
            {/* <div className=" grid grid-cols-4 gap-6"> */}
            <div className="flex flex-col md:flex-row">
              <Link className="p-3" href={ARTICLES[0].href}>
                <ArticleCard {...ARTICLES[0]} />
              </Link>
              <Link className="p-3" href={ARTICLES[1].href}>
                <ArticleCard {...ARTICLES[1]} />
              </Link>
              <Link className="p-3" href={ARTICLES[0].href}>
                <ArticleCard {...ARTICLES[0]} />
              </Link>
              <Link className="p-3" href={ARTICLES[1].href}>
                <ArticleCard {...ARTICLES[1]} />
              </Link>
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
