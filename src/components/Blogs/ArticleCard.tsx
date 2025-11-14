import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ArticleCardProps {
  img: string;
  date: string;
  title: string;
  description: string;
  link: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  img,
  date,
  title,
  description,
  link,
}) => {
  return (
    <Link href={link}>
      <div className=" w-full flex flex-col border rounded-2xl border-[#E8E8E8] cursor-pointer overflow-hidden hover:shadow-[0_4px_10px_#FCE6E8] transition duration-500 ease-in-out">
        <div className="w-full">
          <Image
            src={img}
            alt="ai-integration"
            width={409}
            height={0}
            className="h-[250px] md:h-[200px] w-full object-cover rounded-t-2xl"
          />
        </div>
        <div className="p-6 flex flex-col gap-2 justify-between h-full">
          <p className="text-sm font-normal leading-5 text-[#E53935]">{date}</p>
          <h4 className="text-lg font-medium leading-6.5 text-[#1E1E1E]">
            {title}
          </h4>
          <p className="text-sm font-normal leading-5 text-[#4A5565] pb-3">
            {description.slice(0, 80)}...
          </p>
          <p className="flex gap-2 items-center text-base text-[#E53935] font-medium leading-6">
            <span>Read More</span>
            <ArrowRightIcon size={16} />
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
