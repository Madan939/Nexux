import Container from "../shared/layout/Container";
import ResuableButton from "../shared/layout/Button";
import { useTranslations } from "next-intl";
import { ChevronsLeftRight, Globe, Palette, Zap } from "lucide-react";

const Process = () => {
  const t = useTranslations("services");
  const data = [
    {
      id: 1,
      img: "zap",
      title: t("process.steps.1.title"),
      des: t("process.steps.1.description"),
    },
    {
      id: 2,
      img: "palette",
      title: t("process.steps.2.title"),
      des: t("process.steps.2.description"),
    },
    {
      id: 3,
      img: "left-right",
      title: t("process.steps.3.title"),
      des: t("process.steps.3.description"),
    },
    {
      id: 4,
      img: "internet",
      title: t("process.steps.4.title"),
      des: t("process.steps.4.description"),
    },
  ];
  return (
    <>
      <section className="bg-[linear-gradient(108deg,#FCE6E8_2.62%,#FFFFFF_31.21%,#FFFCFC_76.73%,#FEF3F4_95.58%,#FFFCFC_104.18%,#FDECED_118.14%)] py-[60px]">
        <Container>
          <div className="space-y-4 md:space-y-10">
            <section className="text-center space-y-2">
              <ResuableButton>
                <span className="text-[#E50914]">{t("process.title")}</span>
              </ResuableButton>
              <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 ">
                {t("process.heading")}{" "}
                <span className="text-[#E50914]">
                  {t("process.colorheading")}
                </span>{" "}
                {t("process.heading_1")}{" "}
                <span className="text-[#E50914]">
                  {t("process.colorheading_1")}
                </span>{" "}
                {t("process.heading_2")}
              </h2>
              <p className="font-normal leading-6 text-[15px] md:text-base lg:w-7/10 mx-auto">
                {t("process.description")}
              </p>
            </section>
            <section className="md:w-7/10 lg:w-6/10 xl:w-[517px] space-y-4 mx-auto">
              {data.map((item) => (
                <div key={item.id} className="flex justify-between">
                  <div className="w-0.5/10">
                  <div className="w-fit bg-[#FCE6E891] p-2 rounded-full text-[#E50914]">
                    {renderIcon(item.img)}
                    </div>
                  </div>
                  <p className="text-[#595959] leading-6 font-normal w-1.5/10 ">Steps-{item.id}:</p>
                  <div className=" w-7/10 md:w-[79%]">
                    <p className="font-semibold leading-6 text-text-primary">{item.title}</p>
                    <p className="font-normal text-[#737373] text-sm">{item.des}</p>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Process;

function renderIcon(icon: string) {
  switch (icon) {
    case "zap":
      return <Zap size={20} />;
    case "palette":
      return <Palette size={20} />;
    case "left-right":
      return <ChevronsLeftRight size={20} />;
    case "internet":
      return <Globe size={20} />;
    default:
      return null;
  }
}
