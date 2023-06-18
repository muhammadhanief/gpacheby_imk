import Image from "next/image";
import HeroImage from "../../public/bg 3 1.png";

const Hero = () => {
  return (
    <div className="w-full overflow-hidden pb-16">
      <div className="h-[50vh] w-full top-0 left-0 absolute -z-10">
        <Image
          src={HeroImage}
          alt="Hero Image"
          fill
          style={{
            objectFit: "cover",
          }}
        />
        <div className="w-full h-full absolute bg-black/50" />
      </div>
      <div
        className="w-full relative"
        style={{
          height: "calc(50vh - 8rem)",
        }}
      >
        <div className="container mx-auto py-[10vh] text-white">
          <h1 className="text-6xl text-center text-cheby uppercase [text-shadow:_-2px_-2px_0_rgb(255_255_255_/_100%)] ">
            SEJARAH GPA CHEBY
          </h1>
          <div className="-m-8 h-2 bg-white w-96 mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
