import { useTranslations } from "next-intl";
import aboutData from "../../../messages/en/about.json";
import { Award, Heart, Target, Users2 } from "lucide-react";
const ValuesCard = () => {
  const valuesData = aboutData.ourValues.valuesData;
  const t = useTranslations("about.ourValues");
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-8 items-center md:text-center justify-center">
      {valuesData.map((data, index) => (
        <div
          key={index}
          className="p-6 flex flex-col gap-4 rounded-lg border border-[#DDD] shadow-[0_2px_2px_0_rgba(0,0,0,0.08)]"
        >
          <div className=" text-white w-fit p-3 rounded-full bg-[#E50914] md:mx-auto">
            {renderIcons(data.icon)}
          </div>
          <h4 className="text-base font-medium leading-6 text-[#1E1E1E]">
            {t(`valuesData.${index}.title`)}
          </h4>
          <p className="text-[#595959] text-sm leading-4 font-normal">
            {t(`valuesData.${index}.description`)}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ValuesCard;

const renderIcons = (icon: string) => {
  switch (icon) {
    case "target":
      return <Target size={20} />;
    case "heart":
      return <Heart size={20} />;
    case "people":
      return <Users2 size={20} />;
    case "badge":
      return <Award size={20} />;
    default:
      return null;
  }
};
