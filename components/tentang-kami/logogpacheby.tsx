import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";

const LogoGpaCheby = () => {
  return (
    <div className="w-full overflow-hidden bg-white mt-16">
      <div className="relative h-44 w-100 mx-auto m-5">
        <Image
          fill
          src={"/cheby-logo.jpg"}
          style={{ objectFit: "contain" }}
          alt=""
        ></Image>
      </div>
      <p className="text-black text-center">logo GPA CHEBY</p>
      <div className="container mx-auto py-2 text-justify">
        <p className="text-black px-4">
          GPA Cheby merupakan salah satu unit kegiatan mahasiswa (UKM) yang
          berada di bawah naungan Senat Mahasiswa (Sema) Politeknik Statistika
          STIS. Kegiatan yang dilakukan GPA Cheby berada di dalam pengawasan
          dosen pembina, Dewan Perwakilan Mahasiswa (DPM) Polstat STIS dan SEMA
          Polstat STIS. Pengawasan tersebut terkait dengan perizinan kegiatan,
          ketercapaian pelaksanaan kegiatan, pendanaan, dsb
        </p>
        <p className="text-black px-4">
          Dalam pelaksanaannya, GPA Cheby memiliki seksi dan divisi dengan
          fokusnya masing-masing. Divisi memiliki fokus pada perancangan dan
          pelaksanaan teknis kegiatan; sedangkan sie memiliki fokus dalam
          penyokongan sumber daya sehingga kegiatan dapat berjalan maksimal.
          Divisi dan Sie GPA Cheby, yaitu:
        </p>
      </div>
      <div className="text-black container mx-auto text-justify">
        <p className="px-4">Divisi</p>
        <div className="flex flex-col md:flex-row w-full gap-6">
          <div className="w-full hover:shadow-xl">
            <Link
              href={"/tentang_kami/divisi/gunung-hutan"}
              className="w-full "
            >
              <div className="rounded-xl h-14 flex justify-center items-center bg-cheby w-full text-black border-solid border ">
                Gunung dan Hutan
              </div>
            </Link>
          </div>

          <div className="w-full hover:shadow-xl">
            <Link href={"/tentang_kami/divisi/orad"} className="w-full">
              <div className="rounded-xl h-14 flex justify-center items-center bg-cheby w-full text-black border-solid border">
                Olah Raga Arus Deras
              </div>
            </Link>
          </div>

          <div className="w-full hover:shadow-xl">
            <Link
              href={"/tentang_kami/divisi/pengabdian-masyarakat"}
              className="w-full"
            >
              <div className="rounded-xl h-14 flex justify-center items-center bg-cheby w-full text-black border-solid border">
                Pengabdian Masyarakat
              </div>
            </Link>
          </div>

          <div className="w-full hover:shadow-xl">
            <Link href={"/tentang_kami/divisi/rcc"} className="w-full">
              <div className="rounded-xl h-14 flex justify-center items-center bg-cheby w-full text-black border-solid border">
                Rock Climbing and Caving
              </div>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-black container mx-auto py-1">
        <p className="px-4">Seksi</p>

        <div className="flex flex-col md:flex-row w-full gap-6 ">
          <div className="w-full hover:shadow-xl ">
            <Link href={"/tentang_kami/sie/psdm"} className="w-full  ">
              <div className="rounded-xl h-14 flex justify-center items-center bg-cheby w-full text-black border-solid border ">
                Pengembangan Sumber Daya Manusia
              </div>
            </Link>
          </div>
          <div className="w-full hover:shadow-xl">
            <Link href={"/tentang_kami/sie/pp-sar"} className="w-full">
              <div className="rounded-xl h-14 flex justify-center items-center bg-cheby w-full text-black border-solid border">
                Pertolongan Pertama dan SAR
              </div>
            </Link>
          </div>
          <div className="w-full hover:shadow-xl">
            <Link href={"/tentang_kami/sie/humas"} className="w-full">
              <div className="rounded-xl h-14 flex justify-center items-center bg-cheby w-full text-black border-solid border">
                Hubungan Masyarakat
              </div>
            </Link>
          </div>
          <div className="w-full hover:shadow-xl">
            <Link href={"/tentang_kami/sie/perkap"} className="w-full">
              <div className="rounded-xl h-14 flex justify-center items-center bg-cheby w-full text-black border-solid border">
                Perlengkapan
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-2 text-justify">
        <p className="text-black ">
          Dalam satu kepengurusan, GPA Cheby memiliki Badan Pengurus Harian
          (BPH) yang terdiri dari ketua, wakil ketua, sekretaris dan bendahara.
          BPH dalam pelaksanaan kegiatannya dibantu oleh koordinator dari
          masing-masing sie dan divisi.
        </p>
        <p className="text-black ">
          Pada waktu yang telah ditentukan akan dilakukan evaluasi program kerja
          yang telah dilaksanakan sepanjang waktu sebelum evaluasi diadakan,
          untuk mengetahui hal-hal yang perlu diperbaiki untuk kegiatan
          selanjutnya. Selain itu, pada akhir kepengurusan tentu saja akan
          dilaksanakan evaluasi tahunan yang dihadiri oleh semua anggota guna
          meningkatkan mutu pada pelaksanaan kepengurusan berikutnya.
        </p>
      </div>

      <div className="container mx-auto py-2 pb-4 ">
        <Link className="font-bold text-black" href={"/sejarah"}>
          {<ChevronLeftIcon className="h-3 pl-1"></ChevronLeftIcon>}
          Lihat juga Sejarah GPA CHEBY
        </Link>
      </div>
    </div>
  );
};

export default LogoGpaCheby;
