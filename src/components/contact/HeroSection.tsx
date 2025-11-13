import { useTranslations } from "next-intl";
import Container from "../shared/layout/Container";
import Link from "next/link";
import { MailPlus, Phone } from "lucide-react";

const HeroSection = () => {
  const t = useTranslations("contact.herosection");
  return (
    <>
      <section className="bg-[linear-gradient(108deg,#FCE6E8_2.62%,#FFF_55.49%,#FFFCFC_76.73%,#FEF3F4_95.58%,#FFFCFC_104.18%,#FDECED_118.14%)] py-15">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 ">
            <section className="space-y-2 md:space-y-6">
              <h1 className="text-3xl md:4xl xl:text-5xl font-bold leading-10 md:leading-14">
                {t("h1")}
              </h1>
              <div className="font-normal leading-6 text-[#595959]">
                <p>{t("p1")}</p>
                <p>{t("p2")}</p>
              </div>
              <section className="space-y-2">
                <div className="flex gap-2">
                  <span className="h-8 w-8 rounded-full bg-[#FBDADC] text-[#E50914] flex items-center justify-center font-semibold">
                    <MailPlus size={18} />
                  </span>
                  <Link href="" className="text-[#595959] font-normal">
                    info@nexuslabs.com
                  </Link>
                </div>
                <div className="flex gap-2">
                  <span className="h-8 w-8 rounded-full bg-[#FBDADC] text-[#E50914] flex items-center justify-center font-semibold">
                    <Phone size={18} />
                  </span>
                  <Link href="" className="text-[#595959] font-normal">
                    +977 9789123678
                  </Link>
                </div>
              </section>
              <div className="grid grid-cols-1 xl:grid-cols-2">
                <section className="space-y-1">
                  <h2 className="font-semibold text-lg md:text-xl leading-8 md:leading-10 ">
                    {t("dh1")}
                  </h2>
                  <p className="font-normal leading-6 text-[#595959]">
                    {t("dp1")}
                  </p>
                </section>
                <section className="space-y-1">
                  <h2 className="font-semibold text-lg md:text-xl leading-8 md:leading-10 ">
                    {t("dh2")}
                  </h2>
                  <p className="font-normal leading-6 text-[#595959]">
                    {t("dp2")}
                  </p>
                </section>
              </div>
            </section>
            <section className="h-full lg:pl-6">
              <form className="space-y-3 shadow-[0_4px_10px_5px_rgba(0,0,0,0.06)] p-6 md:p-10 lg:p-8 rounded-xl md:rounded-3xl">
                <h2 className="font-semibold text-2xl md:text-xl leading-8 md:leading-10 ">
                  {t("form.h1")}
                </h2>
                <p className="font-normal leading-6 text-[#595959]">
                  {t("form.p")}
                </p>
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="name" className="font-normal">
                    {t("form.f1")}
                  </label>
                  <input
                    type="text"
                    name=""
                    id="name"
                    placeholder={t("form.f1")}
                    className="border focus:outline-0 p-2 rounded-lg text-sm"
                  />
                </div>
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="name" className="font-normal">
                    {t("form.f2")}
                  </label>
                  <input
                    type="text"
                    name=""
                    id="name"
                    placeholder={t("form.f2")}
                    className="border focus:outline-0 p-2 rounded-lg text-sm"
                  />
                </div>
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="name" className="font-normal">
                    {t("form.f3")}
                  </label>
                  <input
                    type="text"
                    name=""
                    id="name"
                    placeholder={t("form.f3")}
                    className="border focus:outline-0 p-2 rounded-lg text-sm"
                  />
                </div>
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="message" className="font-normal">
                    {t("form.f4")}
                  </label>
                  <textarea
                    name="message"
                    id=""
                    className="border focus:outline-0 p-2 rounded-lg h-24 text-sm"
                    placeholder={t("form.f4")}
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value={t("form.cta")}
                  className="bg-[#E50914] font-semibold w-full text-white py-2 md:py-3 rounded-lg md:rounded-2xl hover:cursor-pointer"
                />
              </form>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
