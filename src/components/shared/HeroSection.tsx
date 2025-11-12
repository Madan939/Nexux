"use client";
import { useMemo } from "react";
import Container from "./layout/Container";
import { Zap } from "lucide-react";
import StarBorder from "../ui/StarBorder";
import Link from "next/link";
import Image from "next/image";
interface HeroText {
  btnText: string;
  title: string;
  subtitle: string;
  background?: string;
  cta_1: string;
  cta_1_link: string;
  cta_2: string;
  cta_2_link: string;
}
const HeroSection = ({
  btnText,
  title,
  subtitle,
  background,
  cta_1,
  cta_1_link,
  cta_2,
  cta_2_link,
}: HeroText) => {
  const isVideo = useMemo(
    () => background && background.toLowerCase().includes(".mp4"),
    [background]
  );
  return (
    <>
      <section className="relative">
        {background ? (
          <>
            {isVideo ? (
              <div className="absolute inset-0">
                <video
                  className="w-full h-full object-cover"
                  src={background}
                  autoPlay
                  loop
                  muted
                />
              </div>
            ) : (
              <div className="absolute inset-0">
                <Image
                  src={background || ""}
                  alt={title}
                  height={1000}
                  width={100}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </>
        ) : (
          <></>
        )}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url('/images/hero-section.svg')",
            backgroundSize: "cover",
            backgroundPosition: "left",
          }}
        ></div>
        <div className="relative py-14 md:py-40 z-10">
          <Container>
            <section className="flex justify-center items-center flex-col space-y-6 md:space-y-10 text-white text-center">
              <div>
                <button className="bg-white rounded-3xl px-4 py-2 flex items-center">
                  <Zap size={20} fill="#E50914" className=" text-transparent" />
                  <span className="ml-2 text-xs md:text-sm font-medium text-[#E50914] leading-4">
                    {btnText}
                  </span>
                </button>
              </div>
              <div className="space-y-3 md:space-y-4 lg:w-[80%] mx-auto">
                <h1 className="text-3xl md:4xl xl:text-5xl font-bold leading-10 md:leading-14">
                  {title}
                </h1>
                <p className="font-normal leading-6 ">{subtitle}</p>
              </div>
              <div className="flex flex-wrap justify-between md:justify-center md:gap-6 items-center w-full">
                <Link href={cta_1_link}>
                  <StarBorder
                    as="button"
                    className="custom-class leading-6 hover:cursor-pointer text-[15px] md:text-base "
                    color="#E50914"
                    speed="3s"
                  >
                    {cta_1}
                  </StarBorder>
                </Link>
                <Link
                  href={cta_2_link}
                  className="flex items-center justify-center bg-transparent border text-[15px] font-semibold leading-6 rounded-md w-[156px] md:w-[200px] h-10 md:h-12 hover:bg-white hover:text-[#E50914] transition duration-500 ease-in-out "
                >
                  {cta_2}
                </Link>
              </div>
            </section>
          </Container>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
