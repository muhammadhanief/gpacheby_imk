import Image from "next/image";
import HeroImage from "../../public/bg-hero.jpg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="h-screen w-full top-0 left-0 absolute -z-10">
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
          height: "calc(100vh - 4rem)",
        }}
      >
        <div className="container mx-auto py-[20vh] text-white">
          <h1 className="text-7xl text-white">
            <span className="underline underline-offset-12 decoration-4 decoration-cheby">
              GPA{" "}
            </span>
            Cheby
          </h1>
          <p className="text-2xl max-w-lg font-medium m              b-12">
            Organisasi kepecintaalaman yang berada dalam naungan senat mahasiswa
            Politeknik Statistika STIS
          </p>
          <Link
            href="/tentang_kami"
            className="bg-white  px-8 p-4 text-lg text-black rounded-md hover:bg-cheby hover:no-underline "
          >
            Kenali kami
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
