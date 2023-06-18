import { ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Komentar from "../komentar/komentar";

type Props = {
  title: string;
  imagesrc: string;
  content: string[];
  nextpagetitle: string;
  nextpagelink: string;
};

const TemplateBerita = (props: Props) => {
  return (
    <div className="w-full overflow-hidden bg-white">
      <h1 className="uppercase text-black text-center py-4">{props.title}</h1>
      <div className="relative aspect-video max-w-2xl mx-auto m-5">
        <Image
          fill
          // src={"/foto-divisi/gh.JPG"}
          priority
          src={props.imagesrc}
          style={{ objectFit: "contain" }}
          alt=""
        ></Image>
      </div>
      <p className="text-black  text-center">
        Anggota Divisi {props.title} GPA CHEBY tahun 2022/2023
      </p>

      <div className="container mx-auto py-2 text-justify px-4">
        {props.content.map((content) => (
          <p key={content} className="text-black px-4">
            {content}
          </p>
        ))}
      </div>

      <div className="container mx-auto py-2 pb-4 flex justify-end">
        <Link
          className="font-bold text-black "
          href={`/tentang_kami/${props.nextpagelink}`}
        >
          Baca juga : {props.nextpagetitle}
          {<ChevronRightIcon className="h-3 pl-1"></ChevronRightIcon>}
        </Link>
      </div>
      <Komentar />
    </div>
  );
};

export default TemplateBerita;
