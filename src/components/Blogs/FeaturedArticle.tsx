import { useTranslations } from "next-intl"
import Container from "../shared/layout/Container"
import Image from "next/image"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"

const FeaturedArticle = () => {
    const t = useTranslations("blogs.featuredArticle")
  return (
    <section className="bg-white py-10 md:py-22.5">
        <Container>
        <section>
          <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 ">
              {" "}
              {t("title.text1")}{" "}
              <span className="text-[#E50914]">{t("title.color1")}</span>
            </h2>

            <div className="mt-4 md:mt-10 flex flex-col lg:flex-row gap-6">
                <Image src={t("article.img")} alt={t("article.title")} width={0} height={0} className=" w-[518px] md:w-full lg:w-[518px] lg:h-[400px] xl:h-[302px] object-cover rounded-2xl" />
                <div className="">
                <p className="text-[#E53935] text-sm leading-5 font-normal">{t("article.date")}</p>
                <h3 className="mt-4 text-xl md:text-3xl font-bold leading-7 md:leading-[42px]">{t("article.title")}</h3>
                <p className="mt-2.5 flex flex-col gap-5 text-[#4A5565] text-sm font-normal leading-5">
                    <span>{t("article.description.d1")}</span>
                    <span>{t("article.description.d1")}</span>
                </p>
                <Link href="/blogs/mycase-building-a-high-level-design-system"><div className="mt-9 text-base font-normal text-[#E53935] leading-6 flex gap-2 items-center"><span>{t("cta")}</span><ArrowRightIcon size={16}/></div></Link>
                </div>

            </div>
        </section>
        </Container>
    </section>
  )
}

export default FeaturedArticle