import Container from "../shared/layout/Container";
import { useTranslations } from "next-intl";
import ResuableButton from "../shared/layout/Button";
import { CircleArrowRight, Clock, MapPin } from "lucide-react";
import Link from "next/link";
const Positions = () => {
  const t = useTranslations("career");
  const data = [
    {
      tag: "Engineering",
      title: "Senior Full Stack Developer",
      des: "We're looking for an experienced full stack developer to join our engineering team and help build scalable web applications.",
      location: "San Francisco",
      time: "Full-time",
      requirements: [
        "5+ years of experience",
        "Cloud platforms (AWS/GCP)",
        "React & Node.js",
        "Strong problem-solving skills",
      ],
      href: "/careers/senior-full-stack-developer",
    },
    {
      tag: "UI/UX Designer",
      title: "Mid-Level UI/UX Designer",
      des: "Join our design team to create beautiful, user-centered experiences for our clients’ digital products.",
      location: "San Francisco",
      time: "Full-time",
      requirements: [
        "3+ years of experience",
        "Figma/Sketch expertise",
        "Portfolio of work",
        "User research skills",
      ],
      href: "/careers/mid-level-uiux-designer",
    },
    {
      tag: "Engineering",
      title: "DevOps Engineer",
      des: "Join our design team to create beautiful, user-centered experiences for our clients’ digital products.",
      location: " New York, NY",
      time: "Full-time",
      requirements: [
        "4+ years of experience",
        "Kubernetes & Docker",
        "CI/CD pipelines",
        "Infrastructure as Code",
      ],
      href: "/careers/devops-engineer",
    },
    {
      tag: "Product",
      title: "Product Manager",
      des: "Lead product strategy and execution for our client projects and internal tools.",
      location: "San Francisco",
      time: "Full-time",
      requirements: [
        "5+ years of experience",
        "Technical background",
        "Stakeholder management",
        "Agile methodologies",
      ],
      href: "/careers/product-manager",
    },
    {
      tag: "Marketing",
      title: "Marketing Manager",
      des: "Drive our marketing strategy and help grow our brand presence globally.",
      location: "San Francisco",
      time: "Full-time",
      requirements: [
        "4+ years in B2B marketing",
        "Content strategy",
        "Digital marketing expertise",
        "Analytics-driven",
      ],
      href: "/careers/marketing-manager",
    },
    {
      tag: "Engineering",
      title: "Frontend Developer",
      des: "Build responsive, performant user interfaces using modern frontend technologies.",
      location: "San Francisco",
      time: "Full-time",
      requirements: [
        "3+ years of experience",
        "React/Vue/Angular",
        "Responsive design",
        "TypeScript",
      ],
      href: "/careers/frontend-developer",
    },
  ];
  return (
    <section className="pb-15" id="roles">
      <Container>
        <div className="space-y-4 md:space-y-10 ">
          <section className="text-center space-y-2">
            <ResuableButton>
              {t("position.title")}{" "}
              <span className="text-[#E50914]">{t("position.colortitle")}</span>
            </ResuableButton>
            <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 ">
              <span className="text-[#E50914]">
                {t("position.colorheading")}
              </span>{" "}
              {t("position.heading")}{" "}
              <span className="text-[#E50914]">
                {t("position.colorheading_1")}
              </span>{" "}
              {t("position.heading_1")}
            </h2>
            <p className="font-normal leading-6 text-[15px] md:text-base">
              {t("position.description")}
            </p>
          </section>
          <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {data.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="border border-[#E8E8E8] flex flex-col justify-between rounded-2xl p-6 space-y-4 hover:shadow-[0_4px_10px_#FCE6E8] transition duration-500 ease-in-out"
              >
                <p className="bg-[#FCE6E891] w-fit text-xs px-4 py-1 rounded-xl text-[#E50914] border-2 border-[#F7B3B6]">
                  {item.tag}
                </p>
                <section className="space-y-1">
                  <h3 className="text-lg leading-6 font-semibold">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-5 text-[#595959]">{item.des}</p>
                </section>
                <section className="flex gap-6">
                  <div className="flex gap-2 items-center">
                    <MapPin size={16} className="text-[#E50914]" />
                    <span className="text-sm leading-5 font-normal">
                      {item.location}
                    </span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <Clock size={16} className="text-[#E50914]" />
                    <span className="text-sm leading-5 font-normal">
                      {item.time}
                    </span>
                  </div>
                </section>
                <section className="flex gap-2 flex-wrap">
                  {item.requirements &&
                    item.requirements.map((requireData) => (
                      <div
                        key={requireData}
                        className="border border-[#CCCCCC] text-xs rounded-3xl px-2 py-1 font-normal"
                      >
                        {requireData}
                      </div>
                    ))}
                </section>
                <p className="flex items-center gap-3 border w-fit px-4 py-2 bg-[#E50914] hover:bg-[#FF0F1E] transition duration-500 ease-in-out text-white  rounded-sm">
                  <span className="text-sm leading-5 font-semibold">
                    Apply Now
                  </span>
                  <CircleArrowRight size={14} />
                </p>
              </Link>
            ))}
          </section>
        </div>
      </Container>
    </section>
  );
};

export default Positions;
