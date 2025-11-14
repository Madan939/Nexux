import { useTranslations } from "next-intl";
import Container from "../shared/layout/Container";
import ValuesCard from "./ValuesCard";

const OurValues = () => {
  const t = useTranslations("about.ourValues");
  return (
    <section className="bg-[linear-gradient(108deg,#FCE6E8_2.62%,#FFF_31.21%,#FFFCFC_76.73%,#FEF3F4_95.58%,#FFFCFC_104.18%,#FDECED_118.14%)] py-10 lg:py-15">
      <Container>
        <div className="space-y-4 md:space-y-10">
          <section className="space-y-3 text-center">
            <div className="py-1.5 px-3 border border-[#E50914] rounded-2xl w-fit mx-auto">
              <p className="text-sm font-medium leading-5 text-text-primary">
                <span>{t("btnText.text1")}</span>{" "}
                <span className="text-destructive">{t("btnText.color1")}</span>{" "}
              </p>
            </div>
            <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 ">
              {" "}
              {t("title.text1")}{" "}
              <span className="text-[#E50914]">{t("title.color1")}</span>
              {t("title.text2")}{" "}
              <span className="text-[#E50914]">{t("title.color2")}</span>
            </h2>
            <p className="text-sm font-normal leading-5 ">{t("description")}</p>
          </section>
          <ValuesCard />
        </div>
      </Container>
    </section>
  );
};

export default OurValues;
