import Image from "next/image";
import Hanief from "../../public/hanief.png";
import Ubaid from "../../public/ubaid.png";
import Almira from "../../public/almira.png";
import Endang from "../../public/endang.png";

const PengurusHarian = () => {
  return (
    <div className="bg-white w-full py-20 text-black">
      <div className="container mx-auto">
        <h1 className="text-2xl text-center uppercase">Pengurus Harian</h1>
        <div className="h-1 bg-cheby w-44 mx-auto -mt-3" />
        <div className="flex mx-auto gap-10 justify-center mt-16">
          {PENGURUS.map((pengurus) => (
            <div className="bg-cheby/50 rounded-xl flex flex-col gap-6 w-48 px-6 py-12">
              <div className="w-24 h-24 rounded-full mx-auto relative">
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
