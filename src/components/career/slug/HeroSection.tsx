import Image from "next/image";
import Container from "../../shared/layout/Container";
import { Building2, Clock, MapPin } from "lucide-react";
export interface heroProps {
  title: string;
  location: string;
  time: string;
  work: string;
}
const HeroSection = ({ title, location, time, work }: heroProps) => {
  return (
    <>
      <section className="relative">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/jobs-hero-bg.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        >
          <Image
            src="/images/hero-section.svg"
            alt="hero-section-Nexux"
            height={1000}
            width={100}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-1 py-10 lg:py-15 text-white">
          <Container>
            <h1 className="text-2xl md:3xl xl:text-4xl font-bold leading-10 md:leading-14 mb-1 lg:mb-6">
              {title}
            </h1>
            <section className="flex gap-4 font-normal leading-5">
              <div className="flex gap-2 items-center">
                <MapPin size={16} />
                <span>{location}</span>
              </div>
              <div className="flex gap-2 items-center">
                <Clock size={16} />
                <span>{time}</span>
              </div>
              <div className="flex gap-2 items-center">
                <Building2 size={16} />
                <span>{work}</span>
              </div>
            </section>
          </Container>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
