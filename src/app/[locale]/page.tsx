import HeroSection from "@/src/components/shared/HeroSection";
import Services from "@/src/components/landingPage/Services";
import Count from "@/src/components/shared/Count";
import About from "@/src/components/landingPage/About";
import FromLab from "@/src/components/landingPage/FromLab";
import { Cta } from "@/src/components/landingPage/Cta";
import { Testimonials } from "@/src/components/landingPage/Testimonial";
import { useTranslations } from "next-intl";
export default function LandingPage(){
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
        cta_1_link="/contact-us/#contact"
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
