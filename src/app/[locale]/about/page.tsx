import { use } from "react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import HeroSection from "@/src/components/shared/HeroSection";
import MissionVision from "@/src/components/About/MissionVision";
import OurStory from "@/src/components/About/OurStory";
import OurJourney from "@/src/components/About/OurJourney";
import OurValues from "@/src/components/About/OurValues";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
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
  const t = useTranslations("about");
  return (
    <>
      <HeroSection
        btnText={t("heroSection.btnText")}
        title={t("heroSection.title")}
        subtitle={t("heroSection.subtitle")}
        background="/images/about/hero-section.png"
        cta_1={t("heroSection.cta_1")}
        cta_1_link="/"
        cta_2={t("heroSection.cta_2")}
        cta_2_link="/careers"
      />

      <MissionVision />
      <OurStory />
      <OurJourney />
      <OurValues />
    </>
  );
}
