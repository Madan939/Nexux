"use client";
import { Details } from "@/src/components/career/slug/Details";
import HeroSection from "@/src/components/career/slug/HeroSection";
import { jobsData } from "@/src/components/data/jobs";
import Container from "@/src/components/shared/layout/Container";
import { useParams } from "next/navigation";

const Page = () => {
  const params = useParams();
  console.log(params.slug);
  const data = jobsData.filter((x) => x.slug == params.slug);
  console.log(data);
  return <>{data && data.map((item, index) => <div key={index}>
     <HeroSection title={item.title} location={item.location} time={item.time} work={item.work}/>
     <Container>
        <Details title={item.title} about={item.about} responsibilites={item.responsibilities} requirements={item.requirements}/>
     </Container>
  </div>)}</>;
};

export default Page;
