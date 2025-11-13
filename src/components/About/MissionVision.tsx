import { useTranslations } from "next-intl";
import ResuableButton from "../shared/layout/Button";
import Container from "../shared/layout/Container";
import MissionVisionCard from "./MissionVisionCard";
import Image from "next/image";

const MissionVision = () => {
  const t = useTranslations("about.missionVision");
  return (
    <section className="bg-[linear-gradient(179deg,rgba(252,230,232,0.20)_-222.79%,rgba(255,246,247,0.20)_202.03%)] py-15">
      <Container>
        <div className="space-y-4 md:space-y-10">
          <section className="space-y-3 text-center">
            <ResuableButton>
              <p className="text-sm font-medium leading-5 text-text-primary">
                <span>{t("btnText.text1")}</span>{" "}
                <span className="text-destructive">{t("btnText.color1")}</span>{" "}
                <span>{t("btnText.text2")}</span>{" "}
                <span className="text-destructive">{t("btnText.color2")}</span>
              </p>
            </ResuableButton>
            <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 ">
              {" "}
              {t("title.text1")}{" "}
              <span className="text-[#E50914]">{t("title.color1")}</span>
              {t("title.text2")}{" "}
              <span className="text-[#E50914]">{t("title.color2")}</span>
            </h2>
            <p className="text-sm font-normal">{t("description")}</p>
          </section>
          <section className="grid lg:grid-cols-2 gap-6 text-white">
            <MissionVisionCard
              title={t("cardTitle1")}
              description={t("cardDescription1")}
            />
            <Image
              src="/images/about/missionVision1.svg"
              width={0}
              height={0}
              alt="Card-1"
              className="rounded-2xl w-full h-full object-cover"
            />
            <Image
              src="/images/about/missionVision2.svg"
              width={0}
              height={0}
              alt="Card-1"
              className="rounded-2xl w-full h-full object-cover"
            />

            <MissionVisionCard
              title={t("cardTitle2")}
              description={t("cardDescription2")}
            />
          </section>
        </div>
      </Container>
    </section>
  );
};

export default MissionVision;
