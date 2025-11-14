import { useTranslations } from "next-intl";
import Container from "../shared/layout/Container";
import Timeline from "./Timeline";

const OurJourney = () => {
  const t = useTranslations("about.ourJourney");
  return (
    <section id="journey" className="bg-[linear-gradient(179deg,rgba(252,230,232,0.20)_-222.79%,rgba(255,246,247,0.20)_202.03%)] py-10 lg:py-15">
      <Container>
        <div className="space-y-4 md:space-y-10">
          <section className="space-y-3 text-center ">
            <div className="py-1.5 px-3 border border-[#E50914] rounded-2xl w-fit md:mx-auto">
              <p className="text-sm font-medium leading-5 text-text-primary">
                <span>{t("btnText.text1")}</span>{" "}
                <span className="text-destructive">{t("btnText.color1")}</span>{" "}
              </p>
            </div>
            <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 ">
              {" "}
              {t("title.text1")}{" "}
              <span className="text-[#E50914]">{t("title.color1")}</span>{" "}
              {t("title.text2")}{" "}
              <span className="text-[#E50914]">{t("title.color2")}</span>
            </h2>
            <p className="text-sm font-normal leading-5 ">{t("description")}</p>
          </section>
          <Timeline />
        </div>
      </Container>
    </section>
  );
};

export default OurJourney;
