"use client";
import { useParams } from "next/navigation";
import HeroSection from "./HeroSection";
import { jobsData } from "../../data/jobs";
import Container from "../../shared/layout/Container";
import { Details } from "./Details";

const Jobs = () => {
  const params = useParams();
  console.log(params.slug);
  const data = jobsData.filter((x) => x.slug == params.slug);
//   console.log(data);
  return (
    <>
      {data &&
        data.map((item, index) => (
          <div key={index}>
            <HeroSection
              title={item.title}
              location={item.location}
              time={item.time}
              work={item.work}
            />
            <Container>
              <Details
              title={item.title}
                about={item.about}
                responsibilites={item.responsibilities}
                requirements={item.requirements}
              />
            </Container>
          </div>
        ))}
    </>
  );
};

export default Jobs;
