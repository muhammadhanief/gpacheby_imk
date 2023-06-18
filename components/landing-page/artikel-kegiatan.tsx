import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

const SliderWrapper = styled.div`
  .slick-slide {
  }
`;

function SamplePrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <ChevronLeftIcon
      className={className}
      style={{
        ...style,
        color: "black",
      }}
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <ChevronRightIcon
      className={className}
      style={{
        ...style,
        color: "black",
      }}
      onClick={onClick}
    />
  );
}

const Artikel = () => {
  return (
    <div>
      <div className="bg-white w-full py-20 text-black">
        <div className="container mx-auto">
          <h1 className="text-2xl text-center uppercase">Artikel Terbaru</h1>
          <div className="h-1 bg-cheby w-20 mx-auto -mt-3" />
          <p className="text-xl text-left ">Kegiatan</p>
          <SliderWrapper>
            <Slider {...settings}>
              <ArticleCard {...ARTICLESKegitan[0]} />
              <ArticleCard {...ARTICLESKegitan[0]} />
              <ArticleCard {...ARTICLESKegitan[0]} />
              <ArticleCard {...ARTICLESKegitan[0]} />
            </Slider>
          </SliderWrapper>

          {/* peringatan hari */}

          <p className="text-xl text-left ">Peringatan Hari</p>
          <SliderWrapper>
            <Slider {...settings}>
              <ArticleCardHariPenting {...ARTICLES[0]} />
              <ArticleCardHariPenting {...ARTICLES[0]} />
              <ArticleCardHariPenting {...ARTICLES[0]} />
              <ArticleCardHariPenting {...ARTICLES[0]} />
            </Slider>
          </SliderWrapper>
        </div>
      </div>
    </div>
  );
};

var settings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  initialSlide: 0,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

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
    <div className="bg-black p-6 rounded-xl flex gap-4 m-4">
      <div className="relative rounded shrink-0 w-44 h-64">
        <Image
          src={thumbnail}
          alt={title}
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="flex flex-col gap-4 w-full relative">
        <div className="flex justify-between w-full text-sm">
          <div className="text-cheby">{label}</div>
          <div className="text-gray-100">{date}</div>
        </div>
        <div className="text-xl text-white">
          <div>{title}</div>
        </div>
        <div className="text-gray-100 text-justify">{description}</div>

        <Link
          className="absolute right-0 bottom-0 bg-cheby text-black p-4 rounded flex items-center gap-2 hover:no-underline hover:bg-white group"
          href={href}
        >
          Selengkapnya{" "}
          <ChevronRightIcon className="h-4 w-4 text-black group-hover:translate-x-1 duration-300" />
        </Link>
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
    thumbnail: "/artikel/peringatan/tobacco.png",
    href: "/artikel/hari_penting",
  },
];

const ARTICLESKegitan: ArticleCardProps[] = [
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

const ArticleCardHariPenting: FC<ArticleCardProps> = ({
  title,
  label,
  date,
  description,
  thumbnail,
  href,
}) => {
  return (
    <div className="bg-cheby p-6 rounded-xl flex gap-4 m-4">
      <div className="relative rounded shrink-0 w-44 h-64">
        <Image
          src={thumbnail}
          alt={title}
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className="flex flex-col gap-4 w-full relative">
        <div className="flex justify-between w-full text-sm">
          <div className="text-black">{label}</div>
          <div className="text-black-300">{date}</div>
        </div>
        <div className="text-xl text-black">
          <div>{title}</div>
        </div>
        <div className="text-gray-100 text-justify">{description}</div>

        <Link
          className="absolute right-0 bottom-0 bg-white text-black p-4 rounded flex items-center gap-2 hover:no-underline hover:bg-black hover:text-white group"
          href={href}
        >
          Selengkapnya{" "}
          <ChevronRightIcon className="h-4 w-4 hover:text-white text-black group-hover:translate-x-1 duration-300" />
        </Link>
      </div>
    </div>
  );
};

export default Artikel;
