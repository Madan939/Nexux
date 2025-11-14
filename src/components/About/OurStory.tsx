import Image from "next/image"
import Container from "../shared/layout/Container"
import ResuableButton from "../shared/layout/Button"
import { useTranslations } from "next-intl"
const OurStory = () => {
    const t = useTranslations("about.ourStory")
  return (
    <section className="bg-[linear-gradient(107deg,rgba(252,230,232,0.57)_-31.49%,rgba(255,246,247,0.57)_96.71%)] rounded-3xl py-8 lg:py-24">
      <Container>
        <div className="flex flex-col-reverse justify-center text-center lg:text-start lg:flex-row items-center gap-10 lg:gap-30">
          <Image
            src="/images/about/ourStory.svg"
            width={494}
            height={342}
            alt="our-story-image"
          />
          <div className="space-y-2">
            <ResuableButton>
              <p className="text-sm font-medium leading-5 text-text-primary">
                <span>{t("btnText.text1")}</span>{" "}
                <span className="text-destructive">{t("btnText.color1")}</span>{" "}
              </p>
            </ResuableButton>
            <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 ">
              {" "}
              {t("title.text1")}{" "}
              <span className="text-[#E50914]">{t("title.color1")}</span>{" "}
              {t("title.text2")}{" "}
              <span className="text-[#E50914]">{t("title.color2")}</span>
            </h2>
            <p className="font-normal text-sm leading-5 flex flex-col gap-4">
                <span>
                    {t("description.d1")}
                </span>
                   <span>
                    {t("description.d2")}
                </span>
                   <span>
                    {t("description.d3")}
                </span>
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default OurStory