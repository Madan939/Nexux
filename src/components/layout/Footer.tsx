"use client"
import { useTranslations } from "next-intl";
import Container from "../shared/layout/Container";
import Link from "next/link";
import Image from "next/image";
import footerData from "../../../messages/en/common.json";
import { cn } from "@/src/lib/utils";
import { usePathname } from "next/navigation";

const Footer = () => {
  const t = useTranslations("common");
    const pathname = usePathname();
    const isAdminRoute = pathname?.includes('/admin');
  return (
    <footer className={cn("text-white block", {"hidden": isAdminRoute})}>
      <section
        className="py-8 md:py-16"
        style={{
          backgroundImage: "url('/images/footer/footer-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Container>
          <div className="text-center md:space-y-2">
            <p className="md:text-3xl text-lg font-semibold md:leading-10">
              {t("Footer.first")}
            </p>
            <p className="md:leading-6 font-normal text-sm md:text-base">
              {t("Footer.second")}
            </p>
            <Link
              href="/"
              className="text-[#E50914] text-xs mt-4 md:px-10 px-3 md:py-4 py-2 md:text-lg leading-5 font-semibold inline-block bg-white rounded-3xl"
            >
              {t("Footer.button")}
            </Link>
          </div>
        </Container>
      </section>
      <section className="bg-[#1A1A1A] py-8 md:py-16">
        <Container>
          <section className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1 space-y-3 ">
              <Image
                src="/images/logo.svg"
                alt="footer-logo"
                height={115}
                width={37}
                priority
                className="w-30 h-auto"
              />
              <p className="leading-6 font-normal">{t("Footer.text")}</p>
            </div>
            <section className="md:col-span-2 grid grid-cols-2 gap-2">
              <div className="space-y-3 ">
                <p>{t("Footer.Company")}</p>
                {footerData.Footer.company.map((item, index) => {
                  return (
                    <div key={index}>
                      <Link
                        href={item.href}
                        className="font-medium text-sm text-[#CCCCCC] leading-5 hover:underline"
                      >
                        {t(`Footer.company.${index}.${"label"}`)}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div className="space-y-3">
                <p>{t("Footer.Services")}</p>
                {footerData.Footer.services.map((item, index) => {
                  return (
                    <div key={index}>
                      <Link
                        href={item.href}
                        className="font-medium text-sm text-[#CCCCCC] leading-5 hover:underline"
                      >
                        {t(`Footer.services.${index}.${"label"}`)}
                      </Link>
                    </div>
                  );
                })}
              </div>
            </section>
            <section className="md:col-span-1 ">
              <p>{t("Footer.connect")}</p>

              <div className="flex gap-5">
                {[
                  {
                    img: "/images/footer/linkedin.svg",
                    href: "/",
                    name: "linkedin",
                  },
                  {
                    img: "/images/footer/twitter.svg",
                    href: "/",
                    name: "twitter",
                  },
                  {
                    img: "/images/footer/github.svg",
                    href: "/",
                    name: "github",
                  },
                  {
                    img: "/images/footer/instagram.svg",
                    href: "/",
                    name: "instagram",
                  },
                ].map((item, index) => {
                  return (
                    <div key={index}>
                      <Link
                        key={index}
                        href={item.href}
                        className="inline-block mt-2"
                      >
                        <Image
                          src={item.img}
                          alt={item.name}
                          height={42}
                          width={42}
                          priority
                        />
                      </Link>
                    </div>
                  );
                })}
              </div>
            </section>
          </section>
          <section className="text-center border-t border-white/10 mt-6 md:mt-10 pt-4 md:pt-6 leading-6 font-normal">
            &copy;{new Date().getFullYear()} Nexux Labs.{t("Footer.rights")}
          </section>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
