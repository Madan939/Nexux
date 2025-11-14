import Image from "next/image";
import Container from "../shared/layout/Container";
import ResuableButton from "../shared/layout/Button";
import { useTranslations } from "next-intl";
import PrimaryButton from "../shared/layout/PrimaryButton";
import Link from "next/link";

const About = () => {
  const t = useTranslations("landing");
  return (
    <section className="bg-linear-to-b from-[#FCE6E8]/60 to-[#FFF6F7]/60 py-[60px]">
      <Container>
        <section className="flex max-md:flex-wrap gap-8 md:gap-16  items-center ">
          <div className="w-full md:w-1/2">
            <Image
              src="/images/landingpage/about.svg"
              alt="Nexux-landing-about"
              height={330}
              width={490}
              className="w-full"
              priority
            />
          </div>
          <div className="space-y-2 md:space-y-4 w-full md:w-1/2 max-md:text-center">
            <ResuableButton>
              {t("about.btn1")}{" "}
              <span className="text-[#E50914]">{t("about.colorbtn")}</span>{" "}
            </ResuableButton>
            <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 ">
              {" "}
              {t("about.title")}{" "}
              <span className="text-[#E50914]">{t("about.colortitle")}</span>
              {t("about.title1")}{" "}
              <span className="text-[#E50914]">{t("about.colortitle1")}</span>
            </h2>
            <p className="text-sm font-normal ">{t("about.description_1")}</p>
            <p className="text-sm font-normal ">{t("about.description_2")}</p>
            <Link href="/team/#team">
              <PrimaryButton>{t("about.cta_btn")}</PrimaryButton>
            </Link>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default About;
