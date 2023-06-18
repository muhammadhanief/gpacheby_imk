import Image from "next/image";
import Link from "next/link";
import ImageDivisi from "../../public/foto-divisi/orad.jpeg";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

const isitentangkami = () => {
  return (
    <div className="w-full overflow-hidden bg-white">
      <h1 className="uppercase text-black text-center py-4">
        gunung dan hutan
      </h1>
      <div className="relative aspect-video max-w-2xl mx-auto m-5">
        <Image
          fill
          // src={"/foto-divisi/gh.JPG"}
          priority
          src={ImageDivisi}
          style={{ objectFit: "contain" }}
          alt=""
        ></Image>
      </div>
      <p className="text-black text-center">
        Anggota Divisi Gunung dan Hutan GPA CHEBY tahun 2022/2023
      </p>

      <div className="container mx-auto py-2 text-justify px-4">
        <p className="text-black">
          Divisi Gunung dan Hutan merupakan salah satu divisi dalam struktur
          organisasi GPA Cheby yang dibentuk dengan tujuan untuk mendalami dan
          mengembangkan kegiatan pendakian gunung, penelusuran atau penjelajahan
          hutan rimba dan alam lainnya. Dalam kegiatannya, divisi GH
          mengusahakan untuk melakukan pengaplikasian ilmu/teknik
          kepencintaalaman seperti orientasi medan dan navigasi darat, teknik
          survival, serta eksplorasi gunung dan hutan rimba.
        </p>
        <p className="text-black ">
          Setiap anggota Divisi Gunung Hutan dituntut untuk mampu menjadi leader
          tim dalam setiap kegiatan pendakian/penelusuran gunung hutan,
          mengedepankan kepentingan kelompok, belajar memiliki kemampuan problem
          solving yang kuat saat berhadapan dengan permasalahan di alam.
        </p>
        <p className="text-black">
          Divisi Gunung dan Hutan memiliki program kerja diantaranya Pendakian
          Umum Mahasiswa Polstat STIS, Pendakian Internal bagi anggota GPA Cheby
          serta Pelatihan Internal mengenai gunung hutan bagi anggota.{" "}
        </p>
        <p className="text-black">
          Adapun gunung-gunung yang pernah didaki oleh para anggota GPA Cheby
          baik yang berstatus Anggota Muda, Anggota Biasa hingga Anggota Luar
          Biasa tersebar dari barat hingga timur Pulau Jawa seperti Gunung
          Gede-Pangrango, Salak, Ciremai, Slamet, Sumbing-Sindoro,
          Merapi-Merbabu, Lawu, Arjuno-Welirang hingga puncak tertinggi Jawa,
          Gunung Semeru. Selain itu beberapa anggota GPA Cheby juga pernah
          mendaki gunung luar Jawa seperti Gunung Kerinci dan Rinjani, bahkan
          ada salah satu Anggota Luar Biasa (ALB) yang pernah mendaki Gunung
          Sinai, Mesir.
        </p>
      </div>

      <div className="container mx-auto py-2 pb-4 flex justify-end">
        <Link className="font-bold text-black " href={"/tentang_kami/rcc"}>
          Baca juga : ROCK CLIMBING DAN CAVING
          {<ChevronRightIcon className="h-3 pl-1"></ChevronRightIcon>}
        </Link>
      </div>
    </div>
  );
};

export default isitentangkami;
