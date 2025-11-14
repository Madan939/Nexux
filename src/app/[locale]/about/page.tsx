import { useTranslations } from "next-intl";
import HeroSection from "@/src/components/shared/HeroSection";
import MissionVision from "@/src/components/About/MissionVision";
import OurStory from "@/src/components/About/OurStory";
import OurJourney from "@/src/components/About/OurJourney";
import OurValues from "@/src/components/About/OurValues";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Nexux Labs",
  description:
    "Learn more about Nexux Labs, a passionate team dedicated to building innovative web experiences and delivering digital solutions that empower businesses.",
  alternates: {
    canonical: "https://www.nexuxlabs.com/about",
  },
  openGraph: {
    title: "About Us | Nexux Labs",
    description:
      "Learn more about Nexux Labs, a passionate team dedicated to building innovative web experiences and delivering digital solutions that empower businesses.",
    siteName: "Nexux Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Nexux Labs",
    description:
      "Learn more about Nexux Labs, a passionate team dedicated to building innovative web experiences and delivering digital solutions that empower businesses.",
  },
};

export default function AboutPage() {
  const t = useTranslations("about");
  return (
    <>
      <HeroSection
        btnText={t("heroSection.btnText")}
        title={t("heroSection.title")}
        subtitle={t("heroSection.subtitle")}
        background="/images/about/hero-section.png"
        cta_1={t("heroSection.cta_1")}
        cta_1_link="#journey"
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
