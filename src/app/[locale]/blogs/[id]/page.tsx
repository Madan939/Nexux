import BlogPage from "@/src/components/Blogs/BlogPage";
import Container from "@/src/components/shared/layout/Container";
import { articleData } from "@/src/data/ArticlesData.data";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";


const page = () => {

  return (
    <Container>
    <BlogPage />
    </Container>
  );
};

export default page;
