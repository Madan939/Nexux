import Image from "next/image";
import Container from "../shared/layout/Container";
import ResuableButton from "../shared/layout/Button";
import { useTranslations } from "next-intl";
import listData from "../../../messages/en/services.json";
const FromLab = () => {
  const t = useTranslations("services");
  return (
    <>
      <section className="py-[60px]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <section className="space-y-3 max-lg:text-center">
              <ResuableButton>
                <span className="text-[#E50914]">{t("fromLabs.title")}</span>
              </ResuableButton>
              <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 ">
                {t("fromLabs.heading")}{" "}
                <span className="text-[#E50914]">
                  {t("fromLabs.colorheading")}
                </span>{" "}
                {t("fromLabs.heading_1")}{" "}
              </h2>
              <ul className="space-y-3 text-start">
                {listData.fromLabs.list.map((item,index) => (
                  <li key={index} className="flex items-center gap-5 font-normal leading-6 text-[#737373]">
                    <Image
                      src="/images/services/right-icon.svg"
                      alt="right-icon"
                      height={32}
                      width={32}
                    />
                    <span>{t(`fromLabs.list.${index}`)}</span>
                  </li>
                ))}
              </ul>
            </section>
            <section className="flex justify-end max-lg:hidden">
              <div className="border-t-8 border-r-8 rounded-tl-[140px] rounded-br-[140px] border-[#FCE6E8] w-fit overflow-hidden">
                <div className="border-t-8 border-r-8 border-[#F7B3B6] overflow-hidden rounded-tl-[130px] rounded-br-[130px]">
                  <Image
                    src="/images/services/labs.jpg"
                    alt="from-labs-Nexux"
                    height={500}
                    width={380}
                    className=""
                  />
                </div>
              </div>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
};

export default FromLab;
