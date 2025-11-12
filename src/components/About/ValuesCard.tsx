import { useTranslations } from "next-intl";
import aboutData from "../../../messages/en/about.json";
import { Award, Heart, Target, Users2 } from "lucide-react";
const ValuesCard = () => {
    const valuesData =  aboutData.ourValues.valuesData;
    const t=useTranslations("about.ourValues")
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-center text-center mt-8 justify-center">
    {valuesData.map((data,index) => (
            <div key={index} className="px-20 lg:px-8.5 py-9 flex flex-col gap-4 rounded-lg border border-[#DDD] shadow-[0_2px_2px_0_rgba(0,0,0,0.08)]">
                <div className="flex justify-center text-white w-fit p-3 items-center rounded-full bg-[#E50914] mx-auto">
                {renderIcons(data.icon)}
                </div>
                <h4 className="mt-4 text-base font-medium leading-6 text-[#1E1E1E]">{t(`valuesData.${index}.title`)}</h4>
                <p className="text-[#595959] text-xs leading-4 font-normal">{t(`valuesData.${index}.description`)}</p>
            </div>
        ))}  
    </div>
)
}

export default ValuesCard

const renderIcons = (icon: string) => {
    switch(icon){
        case "target":
            return <Target size={20}/>
        case "heart":
            return <Heart size={20} />
        case "people":
            return <Users2 size={20} />
        case "badge":
            return <Award size={20} />
        default:
            return null;

    }
}