import { useTranslations } from "next-intl";
import HeroSection from "@/src/components/shared/HeroSection";
import Benifits from "@/src/components/career/Benifits";
import Positions from "@/src/components/career/Positions";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | Nexux Labs",
  description:
    "Join Nexux Labs and become part of a creative, innovative team building modern web solutions. Explore open positions and grow your career with us.",
  alternates: {
    canonical: "https://www.nexuxlabs.com/careers",
  },
  openGraph: {
    title: "Careers | Nexux Labs",
    description:
      "Join Nexux Labs and become part of a creative, innovative team building modern web solutions. Explore open positions and grow your career with us.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers | Nexux Labs",
    description:
      "Join Nexux Labs and become part of a creative, innovative team building modern web solutions. Explore open positions and grow your career with us.",
  },
};

export default function Page() {
  const t = useTranslations("career");
  return (
    <>
      <HeroSection
        btnText={t("heroSection.btnText")}
        title={t("heroSection.title")}
        subtitle={t("heroSection.subtitle")}
        background="/images/career-hero-bg.webp"
        cta_1={t("heroSection.cta_1")}
        cta_1_link="#roles"
        cta_2={t("heroSection.cta_2")}
        cta_2_link="/contact-us/#contact"
      />
      <Benifits />
      <Positions />
    </>
  );
}
