"use client";
import Image from "next/image";
import Logo from "../public/cheby-logo.jpg";
import Link from "next/link";
import { FC } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";

const Header = () => {
  return (
    <header className="z-50 relative bg-black">
      <nav className="flex w-full justify-between overflow-hidden items-center">
        <div className="mx-4 w-24 h-16 relative">
          <a href="/">
            <Image fill src={Logo} style={{ objectFit: "contain" }}></Image>
          </a>
        </div>
        <div className="flex gap-6 pr-4">
          {NAVIGATION.map((nav) => (
            <NavItem key={nav.name} {...nav}></NavItem>
          ))}
        </div>
      </nav>
    </header>
  );
};

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

export default Header;
