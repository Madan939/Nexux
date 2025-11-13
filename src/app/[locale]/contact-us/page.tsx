import Faq from "@/src/components/contact/Faq";
import HeroSection from "@/src/components/contact/HeroSection";
import { getTranslations} from "next-intl/server";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });

  return {
    title: t("metaTitle.title"),
  };
}

export default function Page() {

  return (
    <>
  <HeroSection/>
  <Faq/>
    </>
  );
}
