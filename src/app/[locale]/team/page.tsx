import { use } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import HeroSection from "@/src/components/shared/HeroSection";
import Team from "@/src/components/team/Team";
import Count from "@/src/components/shared/Count";
import { Join } from "@/src/components/team/Join";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "team" });
  return {
    title: t("metaTitle.title"),
  };
}
export default function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);
  const t = useTranslations("team");
  const countData = [
    { num: 50, symbol: "+", text: t("count.projectsText") },
    { num: 72, symbol: "%", text: t("count.experienceText") },
    { num: 98, symbol: "%", text: t("count.satisfactionText") },
    { num: 30, symbol: "+", text: t("count.membersText") },
  ];
  return (
    <>
      <HeroSection
        btnText={t("heroSection.btnText")}
        title={t("heroSection.title")}
        subtitle={t("heroSection.subtitle")}
        background="/images/about/hero-section.png"
        cta_1={t("heroSection.cta_1")}
        cta_1_link="/contact-us/#contact"
        cta_2={t("heroSection.cta_2")}
        cta_2_link="/contact-us/#contact"
      />
      <Team />
      <Count countData={countData} image="/images/team/grid.svg" />
      <Join />
    </>
  );
}
