import Image from "next/image";
import HeroImage from "../../public/bg-hero.jpg";
import Link from "next/link";
import Button from "../button";

const Hero = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="h-screen w-full top-0 left-0 absolute -z-10">
        <Image
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAnUlEQVR42u3RQREAAAQAMJIr7U8N57YKy+mo4IwUIgQhQhAiBCFCECJEiBCECEGIEIQIQYgQhCBECEKEIEQIQoQgBCFCECIEIUIQIgQhCBGCECEIEYIQIQhBiBCECEGIEIQIQQhChCBECEKEIEQIQhAiBCFCECIEIUIQghAhCBGCECEIEYIQhAhBiBCECEGIEIQIESIEIUIQIgQh3y1RxfTt4L0uBAAAAABJRU5ErkJggg=="
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
          <div className="pl-3">
            <h1 className="md:text-7xl  text-white ">
              <span className="underline underline-offset-12 decoration-4 decoration-cheby ">
                GPA{" "}
              </span>
              Cheby
            </h1>
            <p className="md:text-2xl  max-w-lg font-medium mb-12">
              Organisasi kepecintaalaman yang berada dalam naungan senat
              mahasiswa Politeknik Statistika STIS
            </p>
            <Link
              href="/tentang_kami"
              className="bg-white py-3 px-3 md:px-8 md:p-4 md:text-lg text-black rounded-md hover:bg-cheby hover:no-underline "
            >
              Kenali Kami
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
