import Image from "next/image";
import { cn } from "../../lib/utils";
import { Marquee } from "../ui/marquee";
import ResuableButton from "../shared/layout/Button";
import { useTranslations } from "next-intl";
import Container from "../shared/layout/Container";

const reviews = [
  {
    name: "Suman KC",
    username: "Front End Developer",
    body: " Nexus Labs' development team delivered an elegant product ahead of schedule, integrating modern APIs and rigorous testing. Their attention to detail reduced bugs and dramatically improved user satisfaction across customers.",
  },

  {
    name: "Meera Shrestha ",
    username: "3D Designer",
    body: "I recommend Nexus Labs for complex integrations. They migrated our data seamlessly, maintained data integrity, and offered excellent training. Communication was prompt and technical explanations were easy to understand clearly.",
  },
  {
    name: "Anil Gurung ",
    username: "Backend Developer",
    body: "From ideation to launch, Nexus Labs provided pragmatic solutions and rapid prototyping. Their designers and engineers collaborated seamlessly, resulting in a robust MVP that attracted investor interest within weeks only.",
  },
  {
    name: "Priya Adhikari ",
    username: "UIUX Designer",
    body: "Our startup scaled quickly thanks to Nexus Labs' cloud expertise; cost optimizations and security best practices saved us money while improving performance. Responsive team, transparent pricing, and strategic guidance throughout.",
  },
  {
    name: "Kabir Shahi",
    username: "Front End Developer",
    body: "Technical leadership at Nexus Labs solved persistent scalability problems. Their monitoring, alerting, and deployment automation reduced downtime drastically. Teamwork, clear timelines, and proactive maintenance make them an exceptional vendor indeed.",
  },
  {
    name: "Sita Lama",
    username: "UIUX Designer",
    body: "Nexus Labs demonstrated strong UX instincts while redesigning our app. User flows became intuitive, onboarding completion rates increased, and customer feedback improved. They delivered measurable improvements aligned with business KPIs",
  },
  {
    name: "Bikash Rai",
    username: "Project Manager",
    body: "Their QA discipline caught critical issues before release, saving us from costly rollbacks. Nexus Labs runs thorough regression tests, documents defects clearly, and follows up until fixes are validated. Dependable.",
  },
  {
    name: "Tara K.C",
    username: "Graphic Designer",
    body: "As a client, we've trusted Nexus Labs with sensitive projects. Their security audits, encryption practices, and incident response carried professionalism. Delivery was consistent, and technical roadmaps drove product stability overall.",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  name,
  username,
  body,
}: {
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-[327px] md:w-98 bg-white overflow-hidden rounded-3xl p-4 md:p-6 mx-1 "
      )}
    >
      <div className="flex flex-row items-center justify-between gap-2">
        <div className="flex gap-2 pb-2 border-b w-7/10">
          <div className="rounded-full w-10 h-10 border flex items-center justify-center font-semibold text-2xl bg-[#FCE6E8] text-[#E53935]">
            {name.slice(0, 1)}
          </div>
          <div className="flex flex-col">
            <figcaption className="text-lg leading-6 font-medium dark:text-white">
              {name}
            </figcaption>
            <p className="text-sm font-medium leading-5 text-[#717276]">
              {username}
            </p>
          </div>
        </div>
        <Image
          className="rounded-full"
          width="82"
          height="32"
          alt="rating-image"
          src="/images/landingpage/testimonials/Rating.svg"
        />
      </div>
      <blockquote className="mt-2 text-sm font-normal">{body}</blockquote>
    </figure>
  );
};

export function Testimonials() {
  const t = useTranslations("landing");
  return (
    <>
      <section className="bg-[linear-gradient(179deg,rgba(252,230,232,0.57)_-222.79%,rgba(255,246,247,0.57)_202.03%)] py-[60px] space-y-4 md:space-y-10">
        <Container>
          <div className="text-center space-y-3">
            <ResuableButton>
              <span className="text-[#E50914]">{t("testimonial.title")}</span>
            </ResuableButton>
            <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 ">
              {t("testimonial.description")}
            </h2>
          </div>
        </Container>
        <div className="relative flex w-full flex-col gap-1 items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s] max-md:hidden">
            {firstRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <Marquee
            reverse
            pauseOnHover
            className="[--duration:40s] md:[--duration:20s]  "
          >
            {secondRow.map((review) => (
              <ReviewCard key={review.username} {...review} />
            ))}
          </Marquee>
          <div className="max-md:hidden from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
          <div className="max-md:hidden from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
        </div>
      </section>
    </>
  );
}
