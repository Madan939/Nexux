import { useTranslations } from "next-intl";
import HeroSection from "@/src/components/shared/HeroSection";
import Team from "@/src/components/team/Team";
import Count from "@/src/components/shared/Count";
import { Join } from "@/src/components/team/Join";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team | Nexux Labs",
  description:
    "Meet the talented and dedicated team at Nexux Labs, driving innovation and creating exceptional web experiences for businesses and users alike.",
  alternates: {
    canonical: "https://www.nexuxlabs.com/team",
  },
  openGraph: {
    title: "Our Team | Nexux Labs",
    description:
      "Meet the talented and dedicated team at Nexux Labs, driving innovation and creating exceptional web experiences for businesses and users alike.",
    siteName: "Nexux Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Team | Nexux Labs",
    description:
      "Meet the talented and dedicated team at Nexux Labs, driving innovation and creating exceptional web experiences for businesses and users alike.",
  },
};

export default function Page() {
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
        cta_1_link="/about"
        cta_2={t("heroSection.cta_2")}
        cta_2_link="/contact-us/#contact"
      />
      <Team />
      <Count countData={countData} image="/images/team/grid.svg" />
      <Join />
    </>
  );
}
