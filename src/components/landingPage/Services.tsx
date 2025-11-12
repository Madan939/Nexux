import Container from "../shared/layout/Container";
import { useTranslations } from "next-intl";
import servicesData from "../../../messages/en/landing.json";
import { Tv2 } from "lucide-react";
import ResuableButton from "../shared/layout/Button";
const Services = () => {
  const t = useTranslations("landing");
  return (
    <section className="bg-[linear-gradient(179deg,rgba(252,230,232,0.57)_-222.79%,rgba(255,246,247,0.57)_202.03%)] py-[60px]">
      <Container>
        <div className="space-y-4 md:space-y-10 ">
          <section className="text-center space-y-2">
            <ResuableButton>
              {t("ourServices.title")}{" "}
              <span className="text-[#E50914]">
                {t("ourServices.colortitle")}
              </span>
            </ResuableButton>
            <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 ">
              {t("ourServices.subtitle")}{" "}
              <span className="text-[#E50914]">
                {t("ourServices.colorsub1")}
              </span>{" "}
              {t("ourServices.sub1")}{" "}
              <span className="text-[#E50914]">
                {t("ourServices.colorsub2")}
              </span>{" "}
              {t("ourServices.sub2")}
            </h2>
            <p className="font-normal leading-6 text-[15px] md:text-base">
              {t("ourServices.semi_subtitle")}
            </p>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {servicesData.ourServices.services.map((service, index) => (
              <div
                key={index}
                className="text-start border border-[#FCE6E8] rounded-2xl p-6  space-y-2"
              >
                <span className="p-2 bg-[#E50914] text-white rounded-full flex items-center justify-center h-10 w-10">
                  <Tv2 size={30} />
                </span>
                <h3 className="font-semibold text-lg leading-7">
                  {t(`ourServices.services.${index}.title`)}
                </h3>
                <p className="font-normal leading-6 text-sm text-[#595959]">
                  {t(`ourServices.services.${index}.description`)}
                </p>
              </div>
            ))}
          </section>
        </div>
      </Container>
    </section>
  );
};

export default Services;
