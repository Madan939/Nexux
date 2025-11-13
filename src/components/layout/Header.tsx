"use client";
import { useTranslations } from "next-intl";
import Container from "../shared/layout/Container";
import headerData from "../../../messages/en/common.json";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/src/lib/utils";
const Header = () => {
  const [menu, setMenu] = useState(false);
  const t = useTranslations("common");
  const pathname = usePathname();
  const isAdminRoute = pathname?.includes('/admin');
  const normalizePath = (path: string) => {
    const pathWithoutSlash = path.replace(/\/$/, "");
    const parts = pathWithoutSlash.split("/");
    if (parts.length > 1 && ["en", "de","np"].includes(parts[1])) {
      return "/" + parts.slice(2).join("/");
    }
    return pathWithoutSlash;
  };

  return (
    <header className={cn("bg-white py-1 sticky top-0 z-40 shadow-md block", {
      "hidden": isAdminRoute
    })}>
      <Container>
        <nav className="flex justify-between py-4 items-center ">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="header-logo"
              height={115}
              width={37}
              priority
              className="w-34 h-auto"
            />
          </Link>

          {/* Navigation Links */}
          <div className="hidden xl:flex items-center space-x-8">
            {headerData.header.map((item, index) => {
              const isActive = normalizePath(pathname) === item.href;
              return (
                <div key={index} className="relative group">
                  <Link href={item.href} className="font-medium leading-5">
                    {t(`header.${index}.${"label"}`)}
                  </Link>
                  <span
                    className={`absolute left-0 -bottom-0.5 h-0.5 bg-[#E50914] transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  ></span>
                </div>
              );
            })}
          </div>

          {/* Contact Button */}
          <Link
            href={t("contact.href")}
            className="hidden xl:block bg-[#E50914] text-white px-7 py-3 rounded-3xl leading-4 font-semibold"
          >
            {t(`contact.label`)}
          </Link>
          <div className="xl:hidden">
            <Menu
              size={25}
              onClick={() => setMenu(!menu)}
            />
          </div>
        </nav>
      </Container>
      <div
        className={`fixed inset-0 bg-black/80 z-40 transition-opacity duration-500 ease-in-out ${
          menu ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setMenu(!menu)}
      ></div>
      <section
        className={`fixed top-0 left-0 px-4 h-screen w-[60%] md:w-[40%] bg-white shadow-md z-50  transition-transform duration-700 ease-in-out
              ${menu ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between my-4">
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="header-logo"
              height={50}
              width={70}
              priority
              className="w-24 h-auto"
            />
          </Link>
          <X
            size={20}
            onClick={() => setMenu(!menu)}
            className="active:text-[#E50914]"
          />
        </div>

        <div className="">
          {headerData.header.map((item, index) => {
            const isActive = normalizePath(pathname) === item.href;
            return (
              <div key={index} className="border-b border-gray-400 py-2">
                <Link
                  href={item.href}
                  className={`font-medium leading-5 ${
                    isActive ? "text-[#E50914]" : ""
                  }`}
                  onClick={() => setMenu(!menu)}
                >
                  {t(`header.${index}.${"label"}`)}
                </Link>
              </div>
            );
          })}
        </div>
        <Link
          href={t("contact.href")}
          className="block w-full mt-2 bg-[#E50914] text-white px-7 py-3 rounded-3xl leading-4 font-semibold text-center"
        >
          {t(`contact.label`)}
        </Link>
      </section>
    </header>
        
  );
};

export default Header;
