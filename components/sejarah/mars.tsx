import Image from "next/image";
import MarsBg from "../../public/sejarah/aaa.png";
import { UserIcon } from "@heroicons/react/24/outline";

const Mars = () => {
  return (
    <>
      <div className="w-full relative py-8 ">
        <div className="absolute w-full h-full top-0">
          <Image
            src={MarsBg}
            alt="Mars Background"
            fill
            style={{
              objectFit: "cover",
            }}
          />
          <div className="absolute bg-black/60  w-full h-full top-0"></div>
        </div>
        <div className="text-white relative z-10 text-center px-4">
          <h2 className="text-3xl">Mars GPA Cheby</h2>
          <div className="h-1 -mt-2 bg-cheby w-40 mx-auto"></div>
          <div className="italic flex flex-col gap-3 py-8">
            <div>Menyusuri rimba belantara </div>
            <div>Bermandi cahaya surya </div>
            <div>Dan enyapa dunia serta umat manusia </div>
            <div>Lestarikan alam raya</div>
            <div>Kicau burung sambut kehadiranmu</div>
            <div>Menapak di puncak biru</div>
            <div>Dan kibarkan panji di sela tebing berbatu</div>
            <div>Perlambang kejayaanmu</div>
            <div>Jayalah chebyku …lestari alamku …damailah duniaku … </div>
            <div>
              Jayalah chebyku …tunjukkan baktimu demi nusa bangsamuu uwoo …uwoo
              … (2x)
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white text-black py-2 pb-8 px-4">
        <div className="mx-auto container flex gap-2 items-center">
          <UserIcon className="w-4 h-4" />
          Sumber Diktat GPA Cheby
        </div>
      </div>
    </>
  );
};

export default Mars;
