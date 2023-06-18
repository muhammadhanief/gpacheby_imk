import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import Hero from "@/components/children-hari-penting/hero";

export default function page() {
  return (
    <main>
      <title>Hari Penting | GPA CHEBY</title>
      <div>
        <Hero />
        <div className="bg-white w-full py-3 text-black">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row">
              <Link
                className="p-3"
                href={"/artikel/hari_penting/children_hari_penting"}
              >
                <ArticleCard {...ARTICLES[0]} />
              </Link>
              <Link
                className="p-3"
                href={"/artikel/hari_penting/children_hari_penting"}
              >
                <ArticleCard {...ARTICLES[0]} />
              </Link>
              <Link
                className="p-3"
                href={"/artikel/hari_penting/children_hari_penting"}
              >
                <ArticleCard {...ARTICLES[0]} />
              </Link>
              <Link
                className="p-3"
                href={"/artikel/hari_penting/children_hari_penting"}
              >
                <ArticleCard {...ARTICLES[0]} />
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
    title: "Hari Tanpa Tembakau Sedunia : “We Need Food, Not Tobacco”",
    label: "Kegiatan",
    date: "31 Mei 2021",
    description:
      "Sejarah Hari Tanpa Tembakau Sedunia Hari Tanpa Tembakau Sedunia dicetuskan oleh Organisasi Kesehatan Dunia (WHO) pada tahun 1987. ",
    thumbnail: "/article/tobacco.png",
    href: "/artikel/hari_penting/children_hari_penting",
  },
];
