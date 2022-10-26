import type { NextPage, InferGetStaticPropsType } from "next";
import Header from "@/components/Header";
import { allPosts, type Post } from "contentlayer/generated";
import { compareDesc } from "date-fns";
import { NextSeo } from "next-seo";
import Page from "@/components/Page";
import PostsGallery from "@/components/PostsGallery";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  const seoTitle = "Silverdust";
  const seoDesc =
    "These might just dust, but it's silver. Who can resist something shiny?";

  return (
    <Page>
      <NextSeo
        title={seoTitle}
        description={seoDesc}
        openGraph={{
          title: seoTitle,
          url: "https://silverdust.vercel.app",
          description: seoDesc,
          site_name: "Silverdust",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <Header title={seoTitle} description={seoDesc} isHero={true} />
      <Header
        title="Blog"
        description="A safe place for words."
        isHero={false}
      />
      <PostsGallery posts={posts} />
    </Page>
  );
};

export const getStaticProps = async () => {
  const posts: Post[] = allPosts;
  const filteredAndSortedPosts = posts.sort((a, b) =>
    compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))
  );

  return {
    props: {
      posts: filteredAndSortedPosts,
    },
  };
};

export default Home;
