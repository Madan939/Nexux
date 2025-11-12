import Image from "next/image";
import Container from "../shared/layout/Container";
import { useTranslations } from "next-intl";
import ResuableButton from "../shared/layout/Button";
import PrimaryButton from "../shared/layout/PrimaryButton";
import Link from "next/link";
export const Join = () => {
  const t = useTranslations("team");
  return (
    <>
      <section className="bg-[linear-gradient(108deg,#FCE6E8_2.62%,#FFF_55.49%,#FFFCFC_76.73%,#FEF3F4_95.58%,#FFFCFC_104.18%,#FDECED_118.14%)] py-15">
        <Container>
          <div className="flex flex-wrap justify-between items-center max-lg:space-y-4">
            <section className="w-full lg:w-5/10  space-y-3 max-lg:text-center">
              <ResuableButton>
                {t("join.title")}{" "}
                <span className="text-[#E50914]">{t("join.colortitle")}</span>
              </ResuableButton>
              <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 ">
                {t("join.heading")}{" "}
                <span className="text-[#E50914]">{t("join.colorheading")}</span>
              </h2>
              <p className="font-normal leading-6 text-[15px] md:text-base">
                {t("join.description")}
              </p>
              <Link href="/" className="mt-3 inline-block">
              <PrimaryButton>{t("join.cta")}</PrimaryButton></Link>
            </section>
            <section className="w-full lg:w-4/10">
              <Image
                src="/images/team/group.svg"
                alt="group-image-nexux"
                height={400}
                width={400}
                className="w-8/10 md:w-6/10 mx-auto lg:w-full"
              />
            </section>
          </div>
        </Container>
      </section>
    </>
  );
};
