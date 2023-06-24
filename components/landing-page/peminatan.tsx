import Image from "next/image";
import Divisi from "../../public/divisi.png";
import Orad from "../../public/lambang-divisi/Arus Deras.png";
import GH from "../../public/lambang-divisi/Gunung.png";
import Pengmas from "../../public/lambang-divisi/Pengmas.png";
import RCC from "../../public/lambang-divisi/Rock Climbing.png";
import Slider from "react-slick";
import styled from "styled-components";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const Peminatan = () => {
  const SliderWrapper = styled.div`
    .slick-slide {
    }
  `;

  function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <ChevronRightIcon
        className={className}
        style={{
          ...style,
          color: "white",
          // backgroundColor: "white",
        }}
        onClick={onClick}
      />
    );
  }
  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <ChevronLeftIcon
        className={className}
        style={{
          ...style,
          color: "white",
        }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: false,
    speed: 500,
    slidesToShow: 1,
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

  const PENGURUS = [
    {
      name: "Gunung",
      image: GH,
      href: "tentang_kami/divisi/gunung-hutan",
    },
    {
      name: "Rock Climbing",
      image: RCC,
      href: "tentang_kami/divisi/rcc",
    },
    {
      name: "Arus Deras",
      image: Orad,
      href: "/tentang_kami/divisi/orad",
    },
    {
      name: "Pengmas",
      image: Pengmas,
      href: "tentang_kami/divisi/pengabdian-masyarakat",
    },
  ];

  return (
    <div className="w-full h-[70vh] bg-blue-500 relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <Image
          src={Divisi}
          fill
          alt={""}
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div
        className="w-full relative"
        style={{
          height: "calc(100vh - 8rem)",
        }}
      >
        <div className="container mx-auto py-24">
          <h1 className="text-2xl text-center uppercase text-white">
            Divisi Peminatan
          </h1>
          {/* <div className="h-1 bg-cheby w-36 mx-auto -mt-3" /> */}
          <div className="hidden md:block">
            <div className="flex flex-col md:flex-row mx-auto gap-10 items-center  justify-center mt-16">
              {PENGURUS.map((pengurus) => (
                <Link key={pengurus.name} href={pengurus.href}>
                  <div
                    key={pengurus.name}
                    className="aspect-video mx-auto relative shrink-0 w-72"
                  >
                    <Image
                      src={pengurus.image}
                      alt=""
                      fill
                      className=""
                      style={{
                        objectFit: "contain",
                        objectPosition: "center",
                      }}
                    />
                  </div>
                </Link>
                // </div>
              ))}
            </div>
          </div>

          <div className="md:hidden w-2/3 mx-auto ">
            <div className="mt-16 ">
              <Slider {...settings}>
                {PENGURUS.map((pengurus) => (
                  <Link key={pengurus.name} href={pengurus.href}>
                    <div
                      key={pengurus.name}
                      className="aspect-video mx-auto relative shrink-0 w-72"
                    >
                      <Image
                        src={pengurus.image}
                        alt=""
                        fill
                        className=""
                        style={{
                          objectFit: "contain",
                          objectPosition: "center",
                        }}
                      />
                    </div>
                  </Link>

                  // </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Peminatan;
