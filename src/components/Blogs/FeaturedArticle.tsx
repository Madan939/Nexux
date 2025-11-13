import { useTranslations } from "next-intl";
import Container from "../shared/layout/Container";
import Image from "next/image";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

const FeaturedArticle = () => {
  const t = useTranslations("blogs.featuredArticle");
  return (
    <section className="bg-white py-10 md:py-15" id="blog">
      <Container>
        <section>
          <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 ">
            {t("title.text1")}{" "}
            <span className="text-[#E50914]">{t("title.color1")}</span>
          </h2>

          <div className="mt-4 md:mt-10 flex flex-col items-center lg:flex-row gap-6">
            <Image
              src={t("article.img")}
              alt={t("article.title")}
              width={0}
              height={0}
              className="w-full lg:w-1/2 xl:w-6/10 lg:h-[400px] xl:h-[350px] object-cover rounded-2xl"
            />
            <div className="space-y-4">
              <p className="text-[#E53935] text-sm leading-5 font-semibold">
                {t("article.date")}
              </p>
              <h3 className=" text-xl md:text-3xl font-bold leading-7 md:leading-[42px]">
                {t("article.title")}
              </h3>
              <p className=" flex flex-col gap-5 text-[#4A5565] text-sm font-normal leading-5">
                <span>{t("article.description.d1")}</span>
                <span>{t("article.description.d1")}</span>
              </p>
              <Link href="/blogs/mycase-building-a-high-level-design-system">
                <div className=" text-base text-[#E53935] leading-6 flex gap-2 items-center font-semibold">
                  <span>{t("cta")}</span>
                  <ArrowRightIcon size={16} />
                </div>
              </Link>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default FeaturedArticle;
