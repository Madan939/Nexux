import { useTranslations } from "next-intl";
import Container from "../shared/layout/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const Cta = () => {
  const t = useTranslations("landing");
  return (
    <>
      <section
        className="w-full relative"
        style={{
          backgroundImage: "url('/images/landingpage/Career-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/landingpage/Container.svg')",
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        ></div>
        <Container>
          <div className="text-center text-white relative z-5 py-8 md:py-14 space-y-2 md:space-y-4">
            <p className="bg-[#FCE6E8] px-8 py-1.5 text-sm rounded-2xl font-medium inline-block text-[#E50914]">
              {t("Cta.btn_text")}
            </p>
            <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 ">
              {t("Cta.title")}
            </h2>
            <p className="font-normal leading-6 text-[15px] md:text-base md:mb-8">
              {t("Cta.description")}
            </p>
            <Link
              href="/careers/#roles"
              className="bg-white hover:bg-gray-100 transition duration-500 ease-in-out text-[#E50914] px-16 py-3 rounded-xl inline-block"
            >
              <section className="flex items-center justify-center gap-2">
                <span className="font-semibold leading-5">
                  {t("Cta.cta_text")}
                </span>
                <span>
                  <ArrowRight
                    size={16}
                    className="border-[1.5px] font-semibold rounded-full border-[#E50914] "
                  />
                </span>
              </section>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
};
