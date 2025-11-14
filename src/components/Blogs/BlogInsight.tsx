import { useTranslations } from "next-intl";
import Container from "../shared/layout/Container";
import ArticleCard from "./ArticleCard";
import articleInsights from "@/messages/en/blogs.json";

const BlogInsight = () => {
  const t = useTranslations("blogs.blogInsights");
  const articles = articleInsights.blogInsights.articles;
  return (
    <section className="bg-white pb-15">
      <Container>
        <section>
          <h2 className="font-semibold text-2xl md:text-3xl leading-8 md:leading-10 ">
            {" "}
            {t("title.text1")}{" "}
            <span className="text-[#E50914]">{t("title.color1")}</span>
          </h2>
          <div className="mt-4 md:mt-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ">
            {articles.map((article, index) => (
              <ArticleCard
                key={index}
                img={article.img}
                date={t(`articles.${index}.date`)}
                title={t(`articles.${index}.title`)}
                description={t(`articles.${index}.description`)}
                link={article.link}
              />
            ))}
          </div>
        </section>
      </Container>
    </section>
  );
};

export default BlogInsight;
