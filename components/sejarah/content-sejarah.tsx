import Image from "next/image";
import GambarSejarah from "../../public/sejarah/album-sejarah.png";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const contentSejarah = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      <div className="container mx-auto py-2 text-justify ">
        {/* <div className="relative aspect-video max-w-2xl mx-auto m-5 ">
          <Image
            fill
            src={GambarSejarah}
            style={{ objectFit: "contain" }}
            alt=""
            className=""
          ></Image>
        </div> */}
        <div className="float-right  relative aspect-video mx-auto m-5 pt-8 pb-4 pl-4">
          <img src="/sejarah/album-sejarah.png" alt="" className="w-full" />
        </div>
        <p className="text-black indent-8 px-4">
          Pada senat periode 1976-1977 merupakan awal berdirinya CHEBY
          (organisasi pencinta alam AIS). Inspirasi berdirinya organisasi ini
          pada awalnya tercetus dari ide Bapak Ali Sadikin yang waktu itu
          sebagai gubernur DKI Jakarta mengadakan camping bersama di dalam Badan
          Koordinasi Kerjasama Perguruan Tinggi (BKKPT), dimana pada kegiatan
          ini AIS mengirimkan 10 orang wakilnya, pada momen tersebut para
          mahasiswa AIS berkenalan dengan mahasiswa pencinta alam perguruan
          tinggi lain. Efek dari perkenalan itu, maka menggugah mahasiswa AIS
          untuk membentuk Group Pencinta Alam (GPA) di kampus AIS. Tindak lanjut
          dari camping itu adalah mahasiswa AIS kembali mengadakan camping
          khusus untuk mahasiswa AIS di Desa Cisalada (sebuah desa di kaki
          Gunung Salak) untuk membentukan GPA tersebut.
        </p>
        <p className="text-black indent-8 px-4">
          Yang ikut pada saat itu ada 16 orang dan mereka itu adalah :
        </p>
        <div className="flex text-black -mt-6 px-4">
          <div className="flex-col">
            <ul>
              <li>Dantez Simbolon (Tingkat III)</li>
              <li>Yusuf Muharam (Tingkat II)</li>
              <li>Zainal Achmad (Tingkat II)</li>
              <li>M. Daud (Tingkat II)</li>
              <li>Yappy Agustino (Tingkat II)</li>
              <li>Suharsono (Tingkat II)</li>
              <li>Ichwan Ridwan (Tingkat II)</li>
              <li>Wili Hendria (Tingkat II)</li>
            </ul>
          </div>
          <div className="flex-col">
            <ul>
              <li>Dodo Sarwanto (Tingkat II)</li>
              <li>Edi Budiman (Tingkat II)</li>
              <li>Herubowo (Tingkat II)</li>
              <li>Bonar Manurung (Tingkat I)</li>
              <li>Odry Syafwil (Tingkat I)</li>
              <li>Wasito (Tingkat I)</li>
              <li>Herdiwanto (Tingkat I)</li>
              <li>Mangundaba (Tingkat I)</li>
            </ul>
          </div>
        </div>
        <p className="text-black indent-8 px-4">
          Mereka inilah yang pertama kali meresmikan berdirinya GPA CHEBY yang
          pada saat itu bernama Statisti Group. Nama Cheby sendiri diambil dari
          rumus statistik yaitu Chebyshev (suatu rumusan untuk menentukan batas
          maximum dan minimum). Peresmian berdirinya GPA Cheby dilaksanakan pada
          tanggal 17 Februari 1977, di Kawah Ratu, Gunung Salak. Kemudian dibuat
          suatu lagu yang menjadi mars Cheby yang merupakan hasil ciptaan mereka
          yang ada pada saat peresmian berdirinya GPA Cheby tersebut. Setelah
          pembentukan GPA Cheby dikonfirmasikan dengan ketua senat yang waktu
          itu adalah Eri Hastoto dan disetujui. Kemudian dibuat pula lambang
          Cheby oleh Satrio Nugroho.
        </p>
        <p className="text-black indent-8 px-4">
          Kegiatan yang dilakukan oleh Cheby sampai saat ini antara lain :
          hiking, camping, ekspedisi, pendakian gunung, ikut serta dalam
          organisasi lingkungan hidup (WALHI) serta mengikuti seminar lingkungan
          hidup. Begitulah sekilas sejarah berdirinya GPA Cheby di kampus STIS.
          Dan kita berharap supaya Cheby semakin jaya di STIS ini.
        </p>
        <p className="text-black"></p>
      </div>

      <div className="container mx-auto py-2 pb-4 flex justify-end">
        <Link className="font-bold text-black " href={"/tentang_kami"}>
          Lihat juga : Tentang GPA Cheby Saat Ini
          {<ChevronRightIcon className="h-3 pl-1"></ChevronRightIcon>}
        </Link>
      </div>
      {/* <h1 className="uppercase text-black text-center py-4">
        gunung dan hutan
      </h1>
      <div className="relative aspect-video max-w-2xl mx-auto m-5">
        <Image
          fill
          src={GambarSejarah}
          style={{ objectFit: "contain" }}
          alt=""
        ></Image>
      </div>
      <p className="text-black text-center">
        Anggota Divisi Gunung dan Hutan GPA CHEBY tahun 2022/2023
      </p> */}
    </div>
  );
};

export default contentSejarah;
