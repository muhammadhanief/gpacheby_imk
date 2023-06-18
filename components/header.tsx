"use client";
import Image from "next/image";
import Logo from "../public/cheby-logo.jpg";
import Link from "next/link";
import { FC, useState } from "react";
import {
  ChevronDownIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { slide as Menu } from "react-burger-menu";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // batas yang dipindah
  interface NavItemProps {
    name: string;
    href: string;
    children?: NavItemProps[];
  }

  const NavItem: FC<NavItemProps> = ({ name, href, children }) => {
    const pathName = usePathname();
    console.log(pathName);
    console.log(href);
    console.log(pathName.split("/").at(0) === href.split("/").at(0));
    console.log(pathName.split("/"));

    if (children) {
      return (
        <div className="group">
          <div
            className={`hover:bg-cheby text-white group px-4 py-2 rounded transition-colors duration-300 no-underline flex gap-2 items-center hover:text-black`}
          >
            {name}
            <ChevronDownIcon className="h-4 w-4"></ChevronDownIcon>
          </div>
          {pathName.split("/").at(1) === href.split("/").at(1) &&
          href.split("/").at(1) !== "" ? (
            <div className="w-full h-1 -mt-0.5 bg-cheby"></div>
          ) : null}
          <div className="flex-col hidden group-hover:flex absolute bg-black rounded">
            {children.map((child) => (
              <Link
                onClick={() => setIsMenuOpen(false)}
                className="hover:no-underline hover:bg-cheby group px-4 py-2 rounded transition-colors duration-300 no-underline text-white hover:text-black "
                href={child.href}
                key={child.name}
              >
                {child.name}
              </Link>
            ))}
          </div>
        </div>
      );
    }
    return (
      <Link
        onClick={() => setIsMenuOpen(false)}
        href={href}
        className="hover:bg-cheby group px-4 py-2 rounded transition-colors duration-300 no-underline hover:no-underline"
      >
        <div className="text-white  group-hover:text-black ">{name}</div>
        {pathName === href ? (
          <div className="w-full h-1 mt-1.5 bg-cheby"></div>
        ) : null}
      </Link>
    );
  };

  const NAVIGATION = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/tentang_kami" },
    { name: "Sejarah", href: "/sejarah" },
    {
      name: "Artikel",
      href: "/artikel",
      children: [
        { name: "Kegiatan", href: "/artikel/kegiatan" },
        { name: "Peringatan Hari", href: "/artikel/hari_penting" },
      ],
    },
    { name: "Pendakian Umum", href: "/pendakian_umum" },
    { name: "Catatan Perjalanan", href: "/catatan_perjalanan" },
  ];

  // batas bawah yang dipindah

  return (
    <header className="z-50 sticky top-0 z-50 bg-black">
      <nav className="flex w-full justify-between overflow-hidden items-center ">
        <div className="hidden md:block mx-4 w-24 h-16 relative">
          <a href="/">
            <Image
              fill
              src={Logo}
              style={{ objectFit: "contain" }}
              alt=""
            ></Image>
          </a>
        </div>

        <div className="md:hidden mx-4 w-16 h-10 relative">
          <a href="/">
            <Image
              fill
              src={Logo}
              style={{ objectFit: "contain" }}
              alt=""
            ></Image>
          </a>
        </div>

        {isMenuOpen ? (
          <XMarkIcon
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mx-4 z-20 w-16 h-10 relative cursor-pointer md:hidden bg-black text-white"
          />
        ) : (
          <Bars3Icon
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="mx-4 z-20 w-16 h-10 relative cursor-pointer md:hidden bg-black text-white"
          />
        )}

        <div className="hidden md:flex gap-6 pr-4">
          {NAVIGATION.map((nav) => (
            <NavItem key={nav.name} {...nav}></NavItem>
          ))}
        </div>

        <div
          className={`fixed right-0 top-0 text-white md:hidden bg-black pt-16 ${
            isMenuOpen ? "flex flex-col" : "hidden"
          } `}
        >
          {NAVIGATION.map((nav) => (
            <NavItem key={nav.name} {...nav}></NavItem>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Header;
