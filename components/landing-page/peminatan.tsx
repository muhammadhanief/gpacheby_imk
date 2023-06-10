import Image from "next/image";
import Divisi from "../../public/divisi.png";

const Peminatan = () => {
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
          <div className="h-1 bg-cheby w-36 mx-auto -mt-3" />
        </div>
      </div>
    </div>
  );
};

export default Peminatan;
