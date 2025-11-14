import { useTranslations } from "next-intl";
import ResuableButton from "../shared/layout/Button";
import Container from "../shared/layout/Container";
import Link from "next/link";
import { LucideLinkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";

const Team = () => {
  const t = useTranslations("team");
  const data = [
    {
      img: "/images/team/members/female-1.jpg",
      name: t("ourteam.members.1.name"),
      position: t("ourteam.members.1.position"),
      des: t("ourteam.members.1.description"),
      linkedin: "",
      twitter: "",
      mail: "",
    },
    {
      img: "/images/team/members/male-1.jpg",
      name: t("ourteam.members.2.name"),
      position: t("ourteam.members.2.position"),
      des: t("ourteam.members.2.description"),
      linkedin: "",
      twitter: "",
      mail: "",
    },
    {
      img: "/images/team/members/female-2.jpg",
      name: t("ourteam.members.3.name"),
      position: t("ourteam.members.3.position"),
      des: t("ourteam.members.3.description"),
      linkedin: "",
      twitter: "",
      mail: "",
    },
    {
      img: "/images/team/members/male-2.jpg",
      name: t("ourteam.members.4.name"),
      position: t("ourteam.members.4.position"),
      des: t("ourteam.members.4.description"),
      linkedin: "",
      twitter: "",
      mail: "",
    },
    {
      img: "/images/team/members/female-3.jpg",
      name: t("ourteam.members.5.name"),
      position: t("ourteam.members.5.position"),
      des: t("ourteam.members.5.description"),
      linkedin: "",
      twitter: "",
      mail: "",
    },
    {
      img: "/images/team/members/male-3.jpg",
      name: t("ourteam.members.6.name"),
      position: t("ourteam.members.6.position"),
      des: t("ourteam.members.6.description"),
      linkedin: "",
      twitter: "",
      mail: "",
    },
  ];

  return (
    <>
      <section className="py-15" id="team">
        <Container>
          <div className="space-y-4 md:space-y-10">
            <section className="space-y-3 text-center">
              <ResuableButton>
                <span className="text-[#E50914]">{t("ourteam.title")}</span>
              </ResuableButton>
              <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 ">
                {t("ourteam.heading")}{" "}
                <span className="text-[#E50914]">
                  {t("ourteam.colorheading")}
                </span>
              </h2>
              <p className="font-normal leading-6 text-[15px] md:text-base">
                {t("ourteam.description")}
              </p>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {data.map((item, index) => (
                <div
                  key={index}
                  className="border-[0.756px] border-[rgba(0,0,0,0.10)] rounded-xl p-6 grid grid-cols-1 xl:grid-cols-3 gap-4"
                >
                  <div className="xl:col-span-1 relative w-full h-[250px] xl:h-[200px] rounded-xl overflow-hidden">
                    <Image
                      src={item.img}
                      alt={item.name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="xl:col-span-2 space-y-1">
                    <section>
                      <p className="font-semibold text-lg">{item.name}</p>
                      <p className="text-[#E53935] font-medium text-sm">
                        {item.position}
                      </p>
                    </section>
                    <p className="text-[#4A5565] text-sm">{item.des}</p>
                    <section className=" mt-4 space-x-2">
                      <Link
                        href={item.linkedin}
                        className="border border-[#D1D5DC] rounded-xl p-3 inline-block"
                      >
                        <LucideLinkedin size={20} />
                      </Link>
                      <Link
                        href={item.twitter}
                        className="border border-[#D1D5DC] rounded-xl p-3 inline-block"
                      >
                        <Twitter size={20} />
                      </Link>
                      <Link
                        href={item.mail}
                        className="border border-[#D1D5DC] rounded-xl p-3 inline-block"
                      >
                        <Mail size={20} />
                      </Link>
                    </section>
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

export default Team;
