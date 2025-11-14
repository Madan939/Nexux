"use client"
import { useTranslations } from "next-intl";
import Container from "../shared/layout/Container";
import Link from "next/link";
import { MailPlus, Phone } from "lucide-react";
import z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const contactSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters").max(50, "Name too long").regex(/^[A-Za-z ]+$/, "Name can only contain alphabets"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^[0-9+-]+$/, "Only numbers, + and - are allowed").min(8, "Phone must be at least 8 digits").max(15, "Phone too long"),
  message: z.string().min(1, "Message cannot be empty").max(255, "Message too long" )
})

export type ContactFormType =  z.infer<typeof contactSchema>;


const HeroSection = () => {
  const t = useTranslations("contact.herosection");

  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isSubmitting}

  } = useForm<ContactFormType>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched"
  })

   const onSubmit = async (payload: ContactFormType) => {
       try {
      const response = await fetch("/api/handle-contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const data = await response.json();
      console.log(data)
      if(response.ok){
        toast.success("Message sent successfully!")
        reset()
      }
    } catch (err) {
      console.error("Submission error:", err);
      toast.error("Error sending messsage, Try Again!")
    } 
  };

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
            <section className="h-full lg:pl-6" id="contact">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-3 shadow-[0_4px_10px_5px_rgba(0,0,0,0.06)] p-6 md:p-10 lg:p-8 rounded-xl md:rounded-3xl"
              >
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
                    {...register("fullName")}
                    type="text"
                    id="name"
                    placeholder={t("form.f1")}
                    className="border focus:outline-0 p-2 rounded-lg text-sm"
                    onKeyDown={(e) => {
                      const key = e.key;
                      const isLetter = /^[A-Za-z]$/.test(key);
                      const allowedKeys = [
                        "Backspace",
                        "Delete",
                        "ArrowLeft",
                        "ArrowRight",
                        "Tab",
                        " ",
                      ];
                      if (isLetter || allowedKeys.includes(key)) return;
                      e.preventDefault();
                    }}
                  />
                  {errors.fullName && (
                    <span className="text-red-500 text-xs">
                      {errors.fullName.message}
                    </span>
                  )}
                </div>
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="name" className="font-normal">
                    {t("form.f2")}
                  </label>
                  <input
                    {...register("email")}
                    type="text"
                    id="name"
                    placeholder={t("form.f2")}
                    className="border focus:outline-0 p-2 rounded-lg text-sm"
                    onKeyDown={(e) => {
                      const key = e.key;
                      if (e.currentTarget.value.length === 0) {
                        if (/^[A-Z]$/.test(key)) {
                          e.preventDefault();
                          return;
                        }
                      }
                    }}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="name" className="font-normal">
                    {t("form.f3")}
                  </label>
                  <input
                    {...register("phone")}
                    type="text"
                    id="name"
                    placeholder={t("form.f3")}
                    className="border focus:outline-0 p-2 rounded-lg text-sm"
                    onKeyDown={(e) => {
                      const allowed = [
                        "+",
                        "-",
                        "Backspace",
                        "Delete",
                        "ArrowLeft",
                        "ArrowRight",
                        "Tab",
                      ];
                      if (e.key >= "0" && e.key <= "9") return;
                      if (allowed.includes(e.key)) return;
                      e.preventDefault();
                    }}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
                <div className="space-y-2 flex flex-col">
                  <label htmlFor="message" className="font-normal">
                    {t("form.f4")}
                  </label>
                  <textarea
                    {...register("message")}
                    name="message"
                    className="border focus:outline-0 p-2 rounded-lg h-24 text-sm"
                    placeholder={t("form.f4")}
                  ></textarea>
                  {errors.message && (
                    <span className="text-red-500 text-xs">
                      {errors.message.message}
                    </span>
                  )}
                </div>
                <input
                  value={isSubmitting ? "Sending..." : t("form.cta")}
                  disabled={isSubmitting}
                  type="submit"
                  className={cn("bg-[#E50914] font-semibold w-full text-white py-2 md:py-3 rounded-lg md:rounded-2xl hover:cursor-pointer", {"bg-red-400": isSubmitting})}
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
