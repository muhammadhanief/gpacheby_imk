import Image from "next/image";
import Gambar from "../../public/artikel/kegiatan/pelantikan-AM.jpeg";

const Content = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto container text-black bg-white text-justify pb-16 ">
        <div className="float-left p-4 ">
          <div className="hidden md:block">
            <img
              src="/artikel/kegiatan/pelantikan-AM.jpeg"
              alt=""
              height={400}
              width={"fill"}
            />
          </div>
          <div className="md:hidden flex justify-center items-center">
            <img
              src="/artikel/kegiatan/pelantikan-AM.jpeg"
              alt=""
              height={260}
              width={"fill"}
            />
          </div>

          {/* <Image alt="" src={Gambar} /> */}
        </div>
        {/* <div className="container mx-auto text-justify text-black"> */}
        <h1 className="text-black pt-6 px-4">
          Pelantikan Anggota Muda GPA Cheby Angkatan 46
        </h1>

        <p className="px-4">
          Pada Minggu, 5 Maret 2023, telah dilaksanakan Pelantikan Anggota Muda
          GPA Cheby Angkatan 46 sekaligus menandai berakhirnya Rangkaian Diksar
          GPA Cheby ke 46. Rangkaian diksar yang berlangsung kurang lebih dalam
          3 bulan ini terdiri dari pradiksar dan diksar. Dari seluruh Rangkaian
          Diksar, sebanyak 13 orang peserta resmi mendapatkan slayer kuning
          setelah mendapatkan ilmu-ilmu dasar kepencintaalaman selama Rangkaian
          Diksar.
        </p>
        <p className="px-4">
          Selamat datang kepada ke-13 Anggota Muda Angkatan 46 yang telah
          berjuang sampai akhir. Semangat dan teruslah berkembang, berakhirnya
          Rangkaian Diksar ini menjadi awal perjuangan bersama di GPA Cheby.
        </p>

        <p className="px-4">Salam Lestari!</p>
      </div>
    </div>
  );
};

export default Content;
