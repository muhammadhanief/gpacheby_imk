import Link from "next/link";
import { FC } from "react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-abu py-8">
      <div className="flex flex-col gap-8 md:flex-row justify-between px-6 ">
        <div className="w-full">
          <FooterTitle name="Artikel Terkini" />
          <ul className="list-none flex flex-col gap-2">
            <li>
              <Link
                className="text-white hover:text-cheby hover:no-underline"
                href={"/"}
              >
                EARTH DAY: “Let’s Go Green”
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-white hover:text-cheby hover:no-underline"
              >
                HARI AIR SEDUNIA : “Groundwater: Making the Invisible Visible”
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-white hover:text-cheby hover:no-underline"
              >
                Pelantikan Anggota Muda GPA Cheby Angkatan 46
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-white hover:text-cheby hover:no-underline"
              >
                Catatan Perjalanan PI
              </Link>
            </li>
            <li>
              <Link
                href={"/"}
                className="text-white hover:text-cheby hover:no-underline"
              >
                Hari Peduli Sampah Nasional: Strategi Pengolahan Sampah
              </Link>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <FooterTitle name="Alamat" />
          <ul className="list-none flex flex-col gap-2">
            <li className="flex gap-2">
              <MapPinIcon className="h-4 w-4 shrink-0 text-white" />
              <div>
                <a
                  className="text-white hover:text-cheby hover:no-underline"
                  href="https://goo.gl/maps/aEVmttYKfCmenhck8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jalan Otto Iskandardinata No. 64C, Jakarta Timur, Daerah
                  Khusus Ibukota Jakarta 13330
                </a>
              </div>
            </li>
            <li className="flex gap-2">
              <PhoneIcon className="h-4 w-4 text-white" />
              <div>
                <a
                  className="text-white hover:text-cheby hover:no-underline"
                  href="http://wa.me/6285376470953"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  085376470953
                </a>
              </div>
            </li>
            <li className="flex gap-2">
              <EnvelopeIcon className="h-4 w-4 text-white" />
              <div>
                <a
                  className="text-white hover:text-cheby hover:no-underline"
                  href="mailto:ukmcheby@stis.ac.id"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ukmcheby@stis.ac.id
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-full">
          <FooterTitle name="Media Sosial" />
          <div className="flex gap-4 justify-center">
            <a
              href="https://www.facebook.com/GpaCheby/"
              target="_blank"
              className="rounded-full bg-cheby p-3  hover:bg-white duration-300 "
            >
              <div className="h-8 w-8 relative ">
                <Image fill src={"/facebook-f.svg"} alt=""></Image>
              </div>
            </a>
            <a
              href="https://twitter.com/gpacheby_stis"
              target="_blank"
              className="rounded-full bg-cheby p-3 hover:bg-white duration-300 "
            >
              <div className="h-8 w-8 relative ">
                <Image fill src={"/twitter.svg"} alt=""></Image>
              </div>
            </a>
            <a
              href="https://www.youtube.com/channel/UCrsdlzMqPNxRZI2EjmTik1Q/"
              target="_blank"
              className="rounded-full bg-cheby p-3  hover:bg-white duration-300  "
            >
              <div className="h-8 w-8 relative ">
                <Image fill src={"/youtube.svg"} alt=""></Image>
              </div>
            </a>
            <a
              href="https://www.instagram.com/gpacheby_stis/"
              target="_blank"
              className="rounded-full bg-cheby p-3  hover:bg-white duration-300  "
            >
              <div className="h-8 w-8 relative ">
                <Image fill src={"/instagram.svg"} alt=""></Image>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface FooterTitleProps {
  name: string;
}

const FooterTitle: FC<FooterTitleProps> = ({ name }) => {
  return <div className="mb-8  text-white  text-center text-xl">{name}</div>;
};

export default Footer;
