import React from "react";
import Komentar from "@/components/komentar/komentar";
import Foto from "../../../public/catatan-perjalanan/pi-guntur.png";
import Image from "next/image";

export default function page() {
  return (
    <main>
      <title>MT. Guntur - MAPALA Politeknik Statistika STIS Jakarta</title>
      <div className="bg-white">
        <div className="mx-auto container text-black bg-white text-justify pb-8">
          <div className="md:float-left md:block hidden p-4">
            <Image src={Foto} alt="" height={500}></Image>
          </div>
          <div className="md:float-left md:hidden p-4">
            <Image src={Foto} alt="" height={400}></Image>
          </div>
          {/* <div className="container mx-auto text-justify text-black"> */}
          <div className="px-4">
            <h1 className="text-black md:pt-6">
              Pendakian Internal 2019 : Gunung Guntur
            </h1>
            <p>
              Jumat malam tanggal 22 Maret 2019, kami yang bejumlah 29 orang
              berkumpul di GOR Otista Jaktim. Pukul 18.30 kami sepakat untuk
              sudah berada di tempat. Namun masih banyak yang belum datang
              dikarenakan suatu hal. Sampai azan isya berkumandang, kami pun
              yang sudah berada di GOR memutuskan untuk menunaikan sholat
              dahulu. Hingga pukul 20.00, kami dari angkatan 39 sampai 42 sudah
              datang. Lalu kami berkumpul bersama masing-masing kelompok untuk
              melakukan pengecekan perlengkapan, baik itu peralatan pribadi
              maupun kelompok. Saat itu kami dibagi menjadi 4 kelompok. Pukul
              20.30 kami berangkat menuju Gunung Guntur yang berada di Garut
              menggunakan truk.
            </p>
            <p>
              Gunung Guntur merupakan gunung berapi aktif yang masih
              menghembuskan belerang yang sedikit tercium di puncak 2249 mdpl
              nya. Dinamakan Gunung Guntur karena di gunung ini sering terdengar
              gemuruh guntur dan awan mendung, bahkan sambaran petir pun sering
              terjadi terutama di daerah puncak Guntur.
            </p>
            <p>
              Di perjalanan, masih terlihat keadaan ibukota yang selalu ramai.
              Melewati jalan yang macet dan juga jalan tol, kami pun menghibur
              diri dengan mengadu lagu antar angkatan supaya tidak bosan.
              Setelah berjam-jam perjalanan, kami sampai di Kab. Garut, suasana
              disana sangat sepi dan gelap sepertinya aktivitas sudah berhenti,
              tidak seperti aktivitas di ibukota yang tak ada hentinya. Semakin
              dekat, truk pun masuk ke gapura yang bertuliskan Desa Citiis
              melalui jalan yang kecil, gelap, dan tidak rata yang membuat truk
              kami bergoyang-goyang. Kami memutuskan untuk mendaki Gunung Guntur
              melewati jalur Curug Citiis. Saat itu waktu menunjukkan pukul
              02.00, kami pun turun dari truk dengan membawa carrier menuju
              basecamp Guntur. Suasana di basecamp sangat sepi. Kami memutuskan
              untuk tidur mengisi kembali energi untuk pendakian besok pagi.
            </p>
          </div>

          {/* </div> */}
        </div>
      </div>
      <Komentar />
    </main>
  );
}
