"use client";
import { articleData } from "@/src/data/ArticlesData.data";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound, useParams } from "next/navigation";

const BlogPage: React.FC = () => {
  const params = useParams();
  const { id } = params;
  const article = articleData.find((a) => a.slug === id);
  if (!article) return notFound();
  return (
    <>
      {/* BreadCrumb */}
      <div className="flex gap-1 items-center py-4 text-xs md:text-base">
        <Link href="/blogs" className="cursor-pointer">
          <p>blogs</p>
        </Link>
        <ChevronRightIcon size={16} className="mt-[3px]" />
        <p>{id}</p>
      </div>

      <div className="flex flex-col gap-8 pb-20">
        <h1 className="text-3xl md:4xl xl:text-5xl font-bold leading-10 md:leading-14 text-center md:text-start">
          {article.title}
        </h1>

        <p className="text-black text-sm leading-5">
          Posted on{" "}
          <span className="text-base font-medium leading-6">
            {article.date}
          </span>
        </p>

        <p className="text-lg text-[#595959] font-normal leading-6.5">
          {article.introduction?.p1 || ""}
        </p>

        <Image src={article.img} alt={article.slug} width={1280} height={400} />
        <p className="text-lg text-[#595959] font-normal leading-6.5">
          {article.introduction?.p2 || ""}
        </p>
        <p className="text-lg text-[#595959] font-normal leading-6.5">
          {article.introduction?.p3}
        </p>
        <h2 className="text-3xl font-semibold">
          Key <span className="text-[#E50914]">Highlights</span>
        </h2>
        <div className="flex flex-col gap-6">
          {article.sections.map((sec, i) => (
            <section className="flex flex-col" key={i}>
              <h3 className="text-2xl font-medium mb-2">{sec.heading}</h3>
              {sec.content && <p className="text-[#595959] ">{sec.content}</p>}

              {sec.phases && (
                <ul className="list-disc ml-6 text-[#595959] ">
                  {sec.phases.map((p, j) => (
                    <li key={j}>
                      <strong>{p.phase}:</strong> {p.details}
                    </li>
                  ))}
                </ul>
              )}

              {sec.results && (
                <>
                  <h3 className="text-2xl font-medium mb-2 mt-4">Results</h3>
                  <ul className="list-disc ml-6 mt-2 text-[#595959] ">
                    {sec.results.map((r, j) => (
                      <li key={j}>{r}</li>
                    ))}
                  </ul>
                </>
              )}
            </section>
          ))}

          <h3 className="text-2xl font-medium mb-2 mt-4">Conclusion</h3>
          <p className="text-[#595959] ">{article.conclusion}</p>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
