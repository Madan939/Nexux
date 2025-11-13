import { useTranslations } from "next-intl";
import Container from "../shared/layout/Container";
import faqData from "../../../messages/en/contact.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { cn } from "@/src/lib/utils";
export interface faqItem {
  question: string;
  answer: string;
}
export interface faqProps {
  data: faqItem[];
}
const faq = ({ data }: faqProps) => {
  return (
    <div className="lg:w-1/2">
      {data.map((item, index) => (
        <Accordion type="single" key={index} collapsible>
          <AccordionItem
            value="item-1"
            className={cn(index === data.length - 1 ? "" : "border-b")}
          >
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};
const Faq = () => {
  const t = useTranslations("contact.faq");
  const col1 = faqData.faq.data.slice(0, 5);
  const col2 = faqData.faq.data.slice(5, 10);
  return (
    <>
      <section className="bg-[linear-gradient(179deg,rgba(252,230,232,0.2)_-222.79%,rgba(255,246,247,0.2)_202.03%)] py-15">
        <Container>
          <h2 className="font-semibold text-lg md:text-3xl leading-8 md:leading-10 text-center mb-4">
            {t("h")} <span className="text-[#E50914]">{t("ch")}</span> {t("h1")}
          </h2>
          <section className="flex flex-col lg:flex-row gap-4 lg:gap-16">
            {faq({ data: col1 })}
            {faq({ data: col2 })}
          </section>
        </Container>
      </section>
    </>
  );
};

export default Faq;
