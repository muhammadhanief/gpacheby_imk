import Image from "next/image";
import Divisi from "../../public/divisi.png";
import Orad from "../../public/lambang-divisi/Arus Deras.png";
import GH from "../../public/lambang-divisi/Gunung.png";
import Pengmas from "../../public/lambang-divisi/Pengmas.png";
import RCC from "../../public/lambang-divisi/Rock Climbing.png";
import Slider from "react-slick";
import styled from "styled-components";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

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
      name: "Arus Deras",
      image: Orad,
    },
    {
      name: "Gunung",
      image: GH,
    },
    {
      name: "Pengmas",
      image: Pengmas,
    },
    {
      name: "Rock Climbing",
      image: RCC,
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
                // <div
                //   className="bg-cheby/50 rounded-xl flex flex-col gap-6 w-48 px-6 py-12"
                //   key={pengurus.name}
                // >
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
                // </div>
              ))}
            </div>
          </div>

          <div className="md:hidden w-2/3 mx-auto ">
            <div className="mt-16 ">
              <Slider {...settings}>
                {PENGURUS.map((pengurus) => (
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
