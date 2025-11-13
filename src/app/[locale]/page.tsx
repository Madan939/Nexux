import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { use } from "react";
import HeroSection from "@/src/components/shared/HeroSection";
import Services from "@/src/components/landingPage/Services";
import Count from "@/src/components/shared/Count";
import About from "@/src/components/landingPage/About";
import FromLab from "@/src/components/landingPage/FromLab";
import { Cta } from "@/src/components/landingPage/Cta";
import { Testimonials } from "@/src/components/landingPage/Testimonial";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } =await params;
  const t = await getTranslations({ locale, namespace: "landing" });

  return {
    title: t("metaTitle.title"),
  };
}

export default function LandingPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = use(params);
  setRequestLocale(locale);

  const t = useTranslations("landing");
  const countData = [
    { num: 50, symbol: "+", text: t("count.projectsText") },
    { num: 8, symbol: "+", text: t("count.experienceText") },
    { num: 98, symbol: "%", text: t("count.satisfactionText") },
    { num: 30, symbol: "+", text: t("count.membersText") },
  ];
  return (
    <>
      <HeroSection
        btnText={t("heroSection.btnText")}
        title={t("heroSection.title")}
        subtitle={t("heroSection.subtitle")}
        background="/videos/landing-hero-section.mp4"
        cta_1={t("heroSection.cta_1")}
        cta_1_link="/"
        cta_2={t("heroSection.cta_2")}
        cta_2_link="/services/#services"
      />
      <Services />
      <Count countData={countData} />
      <About/>
      <FromLab/>
      <Cta/>
      <Testimonials/>
    </>
  );
}
