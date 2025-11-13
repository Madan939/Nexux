import Image from "next/image";
import Container from "../shared/layout/Container";
import { useTranslations } from "next-intl";
import { ZapIcon } from "lucide-react";
import SearchBar from "./SearchBar";

const BlogHero = () => {
  const t = useTranslations("blogs.heroSection");
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-section.svg"
          alt="blog-hero-image"
          height={1000}
          width={100}
          className="w-full h-full object-cover"
        />
      </div>
      <Container>
        <section className="relative z-10 py-14 md:py-40 flex flex-col items-center justify-center">
          <div className=" px-7 py-3 rounded-2xl bg-[#FCE6E8] w-fit  text-[#E50914] text-xs md:text-base leading-4 font-medium">
            <p className="flex gap-1 items-center">
              <span>
                <ZapIcon fill="#E50914" size={24} />
              </span>
              {t("btnText")}
            </p>
          </div>
          <h1 className="mt-10 text-3xl md:text-5xl font-bold leading-14 text-white">
            {t("title")}
          </h1>
          <p className="mt-4 text-white text-sm text-center md:text-base font-normal leading-6">
            {t("subtitle")}
          </p>
          <SearchBar />
        </section>
      </Container>
    </section>
  );
};

export default BlogHero;
