import { useTranslations } from "next-intl";
import ResuableButton from "../shared/layout/Button";
import Container from "../shared/layout/Container";
import blogsData from "../../../messages/en/landing.json";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PrimaryButton from "../shared/layout/PrimaryButton";
const FromLab = () => {
  const t = useTranslations("landing");
  return (
    <>
      <Container>
        <div className="space-y-4 md:space-y-10 md:text-center py-[60px]">
          <section className="space-y-3">
            <ResuableButton>
              {t("fromLab.btn_text")}{" "}
              <span className="text-[#E50914]">
                {t("fromLab.color_btn_text")}
              </span>
            </ResuableButton>
            <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 ">
              <span className="text-[#E50914]">{t("fromLab.color_title")}</span>{" "}
              {t("fromLab.title_text")}{" "}
              <span className="text-[#E50914]">
                {t("fromLab.color_title_1")}
              </span>{" "}
              {t("fromLab.title_text_1")}{" "}
              <span className="text-[#E50914]">
                {t("fromLab.color_title_2")}
              </span>{" "}
              {t("fromLab.title_text_2")}
            </h2>
            <p className="text-sm font-normal lg:w-[70%] mx-auto">
              {t("fromLab.description")}
            </p>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {blogsData.fromLab.blogs.map((item, index) => (
              <Link href={item.link} key={index} className="border border-[#E8E8E8] rounded-2xl overflow-hidden hover:shadow-[0_4px_10px_#FCE6E8] transition duration-500 ease-in-out">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={200}
                  height={200}
                  className="object-center w-full"
                />
                <div className="p-6 text-start space-y-3">
                  <p className="text-[#E53935] text-sm font-normal">{item.date}</p>
                  <p className="font-medium text-lg leading-6">{t(`fromLab.blogs.${index}.title`)}</p>
                  <p className="text-[#4A5565] font-normal leading-5 text-sm">{t(`fromLab.blogs.${index}.description`)}</p>
                  <p     
                    className="text-[#E53935] flex items-center gap-2"
                  >
                    <span className="font-medium leading-4" >{t("fromLab.cta_text")} </span>
                    <span ><ArrowRight size={16} /></span>
                  </p>
                </div>
              </Link>
            ))}
          </section>
          <Link href="/blogs/#blog">
          <PrimaryButton>
            {t('fromLab.seeAllText')}
          </PrimaryButton>
          </Link>
        </div>
      </Container>
    </>
  );
};

export default FromLab;
