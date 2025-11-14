interface MissionVisionCardProps {
    title: string;
    description: string;
}
const MissionVisionCard:React.FC<MissionVisionCardProps> = ({title, description}) => {
  return (
    <div className="px-6 py-15 flex flex-col gap-6 text-center rounded-2xl bg-[#CE0812]">
      <h3 className="text-[32px] font-semibold leading-10.5">{title}</h3>
      <p className="text-base font-normal leading-6">{description}</p>
    </div>
  );
}

export default MissionVisionCard