import HeroSection from "@/src/components/shared/HeroSection";
import Capabilities from "@/src/components/services/Capabilities";
import Process from "@/src/components/services/Process";
import FromLab from "@/src/components/services/FromLab";
import { useTranslations } from "next-intl";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services | Nexux Labs",
  description: "Explore the range of web development and digital solutions offered by Nexux Labs, including custom websites, UI/UX design, and scalable web applications.",
  alternates: {
    canonical: "https://www.nexuxlabs.com/services",
  },
  openGraph: {
    title: "Our Services | Nexux Labs",
    description: "Explore the range of web development and digital solutions offered by Nexux Labs, including custom websites, UI/UX design, and scalable web applications.",
    siteName: "Nexux Labs",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | Nexux Labs",
    description: "Explore the range of web development and digital solutions offered by Nexux Labs, including custom websites, UI/UX design, and scalable web applications.",
  },
};

export default function Page() {
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
      <Process />
      <FromLab />
    </>
  );
}
