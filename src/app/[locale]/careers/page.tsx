import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import HeroSection from "@/src/components/shared/HeroSection";
import Benifits from "@/src/components/career/Benifits";
import Positions from "@/src/components/career/Positions";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "career" });

  return {
    title: t("metaTitle.title"),
  };
}

export default function Page() {
  const t = useTranslations("career");

  return (
    <>
      <HeroSection
        btnText={t("heroSection.btnText")}
        title={t("heroSection.title")}
        subtitle={t("heroSection.subtitle")}
        cta_1={t("heroSection.cta_1")}
        cta_1_link="/"
        cta_2={t("heroSection.cta_2")}
        cta_2_link="/"
      />
      <Benifits />
      <Positions />
    </>
  );
}
