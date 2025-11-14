import Jobs from "@/src/components/career/slug/Jobs";
import { jobsData } from "@/src/components/data/jobs";
interface SlugProps {
  params: Promise<{ slug: string }>;
}
export async function generateMetadata({ params }: SlugProps) {
  const { slug } = await params;
  const jobs = jobsData.find((a) => a.slug === slug);
  return {
    title: `${jobs?.title} | Nexux Labs`,
  };
}
const page = () => {
  return (
    <>
      <Jobs />
    </>
  );
};

export default page;
