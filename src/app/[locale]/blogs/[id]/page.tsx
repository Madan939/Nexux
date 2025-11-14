import BlogPage from "@/src/components/Blogs/BlogPage";
import Container from "@/src/components/shared/layout/Container";
import { articleData } from "@/src/data/ArticlesData.data";
interface SlugProps {
  params: Promise<{ id: string }>;
}
export async function generateMetadata({ params }: SlugProps) {
  const { id } = await params;
  const article = articleData.find((a) => a.slug === id);
  return {
    title: `${article?.title} | Nexux Labs`,
  };
}
const page = () => {
  return (
    <Container>
      <BlogPage />
    </Container>
  );
};

export default page;
