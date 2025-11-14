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
          <div className="flex flex-wrap  justify-between items-center max-lg:space-y-4">
            <section className="w-full lg:w-5/10 max-lg:text-center space-y-3 ">
              <ResuableButton>
                {t("join.title")}{" "}
                <span className="text-[#E50914]">{t("join.colortitle")}</span>
              </ResuableButton>
              <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 ">
                {t("join.heading")}{" "}
                <span className="text-[#E50914]">{t("join.colorheading")}</span>
              </h2>
              <Image
                src="/images/team/group.svg"
                alt="group-image-nexux"
                height={400}
                width={400}
                className="w-full hidden max-md:block md:w-6/10 mx-auto lg:w-full"
              />
              <p className="font-normal leading-6 text-[15px] md:text-base text-[#555555]">
                {t("join.description")}
              </p>
              <Link href="/careers/#roles" className="mt-3">
              <PrimaryButton>{t("join.cta")}</PrimaryButton></Link>
            </section>
            <section className="w-full lg:w-4/10">
              <Image
                src="/images/team/group.svg"
                alt="group-image-nexux"
                height={400}
                width={400}
                className="w-8/10 max-md:hidden md:w-6/10 mx-auto lg:w-full"
              />
            </section>
          </div>
        </Container>
      </section>
    </>
  );
};
