import React from "react";
import Komentar from "@/components/komentar/komentar";
import Foto from "../../../public/catatan-perjalanan/pi-ciremai.png";
import Image from "next/image";

export default function page() {
  return (
    <main>
      <title>
        MT. Ciremai Artikel - MAPALA Politeknik Statistika STIS Jakarta
      </title>
      <div className="bg-white">
        <div className="mx-auto container text-black bg-white text-justify pb-16 ">
          <div className="float-left p-4 md:block hidden">
            {/* <img
              className="p-4"
              src="/catatan-perjalanan/pi-ciremai.png"
              alt=""
            /> */}
            <Image src={Foto} alt="" height={500}></Image>
          </div>
          <div className="float-left p-4 md:hidden">
            {/* <img
              className="p-4"
              src="/catatan-perjalanan/pi-ciremai.png"
              alt=""
            /> */}
            <Image src={Foto} alt="" height={400}></Image>
          </div>
          <div className="px-4">
            {/* <div className="container mx-auto text-justify text-black"> */}
            <h1 className="text-black pt-6">
              Pendakian Internal 2022 : Gunung Ciremai
            </h1>
            <p>
              Pada hari Senin, 26 Desember 2022, GPA Cheby melaksanakan
              pendakian internal dengan jumlah anggota pendakian sebanyak 28
              orang. Tempat pendakian kali ini adalah Gunung Ciremai melalui
              jalur Apuy. Sesuai kesepakatan, anggota pendakian berkumpul di
              depan kampus tepatnya di sebelah masjid kampus pada selang waktu
              pukul 23.00 hingga pukul 00.00. Anggota hadir tepat waktu sehingga
              briefing dan doa dilakukan lebih cepat dan keberangkatan dari
              kampus menuju lapangan desa di Majalengka dimulai pukul 00.35 WIB.
              Perjalanan dihiasi keheningan karena waktu digunakan sebaik
              baiknya untuk tidur mengingat pendakian esok hari akan memakan
              waktu dan tenaga.
            </p>
            <p>
              Perjalanan menempuh waktu kurang lebih 5 jam hingga sampai di
              tujuan yaitu daerah Majalengka pada pukul 05.30. Karena sudah
              menunjukkan waktu sholat subuh, anggota yang berkewajiban terlebih
              dahulu menunaikan ibadah sholat. Setelah itu, free time setelah
              menurunkan carrier dari mobil, anggota diarahkan oleh petugas
              penjaga untuk ke rumahnya.
            </p>
            <p>Estimasi waktu perjalanan</p>
            <div>
              <ul>
                <li>Jakarta – Parkiran di desa: 5 jam</li>
                <li>Desa – Basecamp: 30 menit</li>
                <li>Basecamp – Pos 1: 45 menit</li>
                <li>Pos 1 – Pos 2: 1 jam</li>
                <li>Pos 2 – Pos 3: 1 jam</li>
                <li>Pos 3 – Pos 4: 1 jam</li>
                <li>Pos 4- Pos 5: 1,5 jam</li>
                <li>Pos 5 – Puncak: 2 jam</li>
              </ul>
            </div>
          </div>

          {/* </div> */}
        </div>
      </div>
      <Komentar />
    </main>
  );
}
