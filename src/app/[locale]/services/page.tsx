import { getTranslations, setRequestLocale } from "next-intl/server";
import { useTranslations } from "next-intl";
import { use } from "react";
import HeroSection from "@/src/components/shared/HeroSection";
import Capabilities from "@/src/components/services/Capabilities";
import Process from "@/src/components/services/Process";
import FromLab from "@/src/components/services/FromLab";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } =await params;
  const t = await getTranslations({ locale, namespace: "services" });

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

  const t = useTranslations("services");

  return (
    <>
      <HeroSection
        btnText={t("heroSection.btnText")}
        title={t("heroSection.title")}
        subtitle={t("heroSection.subtitle")}
        background="/images/services/hero-section.jpg"
           cta_1={t("heroSection.cta_1")}
        cta_1_link="/contact-us/#contact"
        cta_2={t("heroSection.cta_2")}
        cta_2_link="/blogs/#blog"
      />
      <Capabilities />
      <Process/>
      <FromLab/>
    </>
  );
}
