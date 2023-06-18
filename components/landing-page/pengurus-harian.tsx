import Image from "next/image";
import Hanief from "../../public/hanief.png";
import Ubaid from "../../public/ubaid.png";
import Almira from "../../public/almira.png";
import Endang from "../../public/endang.png";
import Slider from "react-slick";
import styled from "styled-components";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

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
        color: "black",
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
        color: "black",
      }}
      onClick={onClick}
    />
  );
}

var settings = {
  dots: true,
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

const PengurusHarian = () => {
  return (
    <div className="bg-white w-full py-20 text-black">
      <div className="container mx-auto">
        <h1 className="text-2xl text-center uppercase">Pengurus Harian</h1>
        <div className="h-1 w-44 mx-auto -mt-3" />
        <div className="md:hidden w-2/3 mx-auto">
          <div className="mt-16 ">
            <Slider {...settings}>
              {PENGURUS.map((pengurus) => (
                <div
                  className="bg-cheby/50 rounded-xl w-16 py-12"
                  key={pengurus.name}
                >
                  <div className="w-32 h-32 rounded-full mx-auto relative">
                    <Image
                      src={pengurus.image}
                      alt={pengurus.name}
                      layout="fill"
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-xl font-medium">{pengurus.title}</div>
                    <div>{pengurus.name}</div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex flex-col md:flex-row mx-auto gap-10 items-center  justify-center mt-16">
            {PENGURUS.map((pengurus) => (
              <div
                className="bg-cheby/50 rounded-xl flex flex-col gap-6 w-48 px-6 py-12"
                key={pengurus.name}
              >
                <div className="w-32 h-32 rounded-full mx-auto relative">
                  <Image
                    src={pengurus.image}
                    alt={pengurus.name}
                    layout="fill"
                    className="rounded-full"
                  />
                </div>
                <div className="text-center">
                  <div className="text-xl font-medium">{pengurus.title}</div>
                  <div>{pengurus.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const PENGURUS = [
  {
    name: "Ubaid Firmandeka H.",
    title: "Ketua",
    image: Ubaid,
  },
  {
    name: "Muhammad Hanief",
    title: "Wakil Ketua",
    image: Hanief,
  },
  {
    name: "Almira Utami",
    title: "Sekretaris",
    image: Almira,
  },
  {
    name: "Endang Sulistia",
    title: "Bendahara",
    image: Endang,
  },
];

export default PengurusHarian;
