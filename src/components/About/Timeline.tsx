"use client";
import React, { useState, useEffect, useRef } from "react";
import { useTranslations } from "next-intl";
import journeyData from "../../../messages/en/about.json";

interface TimelineItem {
  year: string;
  title: string;
  brief: string;
  side: string;
}

const Timeline: React.FC = () => {
const t = useTranslations("about.ourJourney")
    
  const [progressHeight, setProgressHeight] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const timelineRef = useRef<HTMLDivElement | null>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);

  const timelineData: TimelineItem[] = journeyData.ourJourney.journeyData;
  useEffect(() => {
    const handleScroll = () => {
      const timeline = timelineRef.current;
      if (!timeline) return;

      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // The scroll position within the timeline section (0 to 1)
      const scrollY =
        Math.min(Math.max(0, windowHeight / 2 - rect.top), rect.height) /
        rect.height;

      // Calculate line height (in pixels)
      const newHeight = scrollY * rect.height;
      setProgressHeight(newHeight);

      // Determine which circle is currently active
      let currentIndex = 0;
      circleRefs.current.forEach((circle, index) => {
        if (circle) {
          const circleRect = circle.getBoundingClientRect();
          const circleCenter = circleRect.top + circleRect.height / 2;
          if (circleCenter < window.innerHeight / 2) {
            currentIndex = index;
          }
        }
      });
      setActiveIndex(currentIndex);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
      <>
        <div ref={timelineRef} className="relative">
          {/* Static Center Line */}
          <div className="absolute left-4  lg:left-1/2 transform -translate-x-1/2 w-1 h-full bg-neutral-300 rounded-full overflow-hidden">
            {/* Animated Scroll Progress Line */}
            <div
              className="absolute top-0 left-0 w-full bg-[#E50914] transition-[height] duration-75 ease-linear rounded-full"
              style={{ height: `${progressHeight}px` }}
            />
          </div>

          {/* Timeline Items */}
          {timelineData.map((item, index) => (
            <div key={index} className="relative mb-5 last:mb-0">
              {/* Center Dot */}
              <div
                ref={(el) => {
                  circleRefs.current[index] = el;
                }}
                className="absolute left-4 lg:left-1/2 transform -translate-x-2 lg:-translate-x-1/2 lg:-translate-y-1/2 top-0 z-10"
              >
                <div
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index <= activeIndex
                      ? "bg-[#E50914] scale-125"
                      : "bg-[#E50914]/50"
                  }`}
                />
              </div>
              {/* Content Card */}
              <div className="w-[90%] mx-auto lg:w-full lg:max-w-full">
              <div
                className={`w-full lg:w-[45%] lg:translate-x-0 md:translate-x-4 translate-x-3 ${
                  item.side === "left"
                    ? "lg:mr-auto "
                    : "lg:ml-auto "
                } mt-8 `}
              >
                <div
                  className={`bg-white px-4 py-4 lg:p-8 transition-all duration-500 flex flex-col transform rounded-[12px] border border-[#FBDADC] ${
                    index <= activeIndex
                      ? "opacity-100  lg:-translate-y-3"
                      : "opacity-50 translate-y-8  lg:translate-y-8"
                  } ${item.side === "left" ? "lg:items-end" : "items-start"}`}
                >
                    <div className="bg-[#E50914] w-fit px-2 py-1 text-white text-sm font-medium rounded-2xl mb-3">{item.year}</div>
                  <h3 className="text-sm lg:text-base font-medium mb-2 lg:mb-0.5 leading-6">
                    {t(`journeyData.${index}.title`)}
                  </h3>
                  <p className="text-[#595959] font-normal text-sm  leading-5 text-justify">
                     {t(`journeyData.${index}.brief`)}
                  </p>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>
      </>
  );
};

export default Timeline;
