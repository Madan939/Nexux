import { useTranslations } from "next-intl";
import ResuableButton from "../shared/layout/Button";
import Container from "../shared/layout/Container";
import Image from "next/image";
import { Check } from "lucide-react";
const Capabilities = () => {
  const t = useTranslations("services");
  const data = [
    {
      img: "/images/services/capabilities/web.svg",
      title: "Web Design & Development",
      des: "Crafting stunning, high-performance websites that captive audiences and drive conversions. We blend creative design with cutting edge technology.",
      list: [
        "Responsive Design",
        "Performance Optimized",
        "SEO Ready",
        "CMS Integration",
      ],
      bg: "border border-[#FCE6E8] bg-[linear-gradient(304deg,#F4D0CA_-18.02%,#FBF0E9_99.28%)]",
    },
    {
      img: "/images/services/capabilities/cloud.svg",
      title: "Cloud & Data Solutions",
      des: "Scalable cloud infrastructure and data analytics platforms that power your business intelligence and growth.",
      list: [
        "Cloud Architecture",
        "Data Management",
        "Analytics & BI",
        "Security & Compilance",
      ],
      bg: "border border-[#FCE6E8] bg-[linear-gradient(323deg,#F4D0CA_-33.01%,#FBF0E9_56.15%)]",
    },
    {
      img: "/images/services/capabilities/product.svg",
      title: "Product Design & UX",
      des: "We design human-centered experiences that look good and work even better.",
      list: [
        "Research-based UX strategy",
        "Interactive prototypes",
        "Scalable design systems",
        "Pixel-perfect UI for every platform",
      ],
      bg: "border border-[#FCE6E8] bg-[linear-gradient(126deg,#F4D0CA_0.77%,#FBF0E9_80.6%)]",
    },
    {
      img: "/images/services/capabilities/database.svg",
      title: "Database Management",
      des: "Delivering robust database solutions for data integrity, performance, and secure business scalability across all platforms.",
      list: [
        "Database design and optimization",
        "SQL and NoSQL solutions",
        "Data migration services ",
        "Performance tuning",
      ],
      bg: "border border-[#FCE6E8] bg-[linear-gradient(126deg,#F4D0CA_0.77%,#FBF0E9_80.6%)]",
    },
    {
      img: "/images/services/capabilities/mobile.svg",
      title: "Mobile App Development",
      des: "Designing native and cross-platform mobile applications that users love — combining performance, usability, and style.",
      list: [
        "iOS and Android development",
        "React Native applications",
        "App store optimization",
        "Mobile-first design",
      ],
      bg: "border border-[#FCE6E8] bg-[linear-gradient(304deg,#F4D0CA_-18.02%,#FBF0E9_99.28%)]",
    },
    {
      img: "/images/services/capabilities/security.svg",
      title: "Security & Compliance",
      des: "Protecting your digital assets with industry-leading security practices, compliance expertise, and proactive risk management.",
      list: [
        "Security audits and assessments",
        "GDPR and compliance consulting",
        "Penetration testing",
        "Security training",
      ],
      bg: "border border-[#FCE6E8] bg-[linear-gradient(323deg,#F4D0CA_-33.01%,#FBF0E9_56.15%)]",
    },
  ];
  return (
    <>
      <section className="bg-[linear-gradient(179deg,rgba(252,230,232,0.20)_-222.79%,rgba(255,246,247,0.20)_202.03%)] w-full h-full py-[60px]">
        <Container>
          <div className="space-y-4 md:space-y-10 ">
            <section className="text-center space-y-2">
              <ResuableButton>
                <span className="text-[#E50914]">
                  {t("capabilities.title")}
                </span>
              </ResuableButton>
              <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 ">
                {t("capabilities.heading")}{" "}
                <span className="text-[#E50914]">
                  {t("capabilities.colorheading")}
                </span>
              </h2>
              <p className="font-normal leading-6 text-[15px] md:text-base">
                {t("capabilities.description")}
              </p>
            </section>
            <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
              {data.map((item, index) => (
                <div
                  key={index}
                  className={`${item.bg} rounded-2xl p-6 md:p-8 flex flex-col justify-between space-y-2`}
                >
                  <div className="space-y-2">
                    <Image
                      src={item.img}
                      alt={item.title}
                      height={44}
                      width={44}
                      priority
                    />
                    <p className="text-[#1E293B] font-semibold text-lg leading-6">{item.title}</p>
                    <p className="text-[#595959] font-normal leading-6">{item.des}</p>
                  </div>
                  <ul>
                    {item.list &&
                      item.list.map((list_item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-[#595959] text-sm leading-5">
                          <Check size={24} className="text-[#E50914]" />
                          <span>{list_item}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Capabilities;
