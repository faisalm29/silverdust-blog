import { GetStaticProps } from "next";
import Page from "@/components/Page";
import { NextSeo } from "next-seo";
import { allPosts, type Post } from "contentlayer/generated";
import BlogPost from "@/components/BlogPost";

type PostPageProps = {
  blogPost: Post;
};

const PostPage = ({ blogPost }: PostPageProps) => {
  const seoTitle = `${blogPost.title} | Silverdust`;
  const url = `https://silverdust.vercel.app/${blogPost.slug}`;

  return (
    <Page>
      <NextSeo
        title={seoTitle}
        description={blogPost.summary}
        canonical={url}
        openGraph={{
          title: seoTitle,
          url,
          description: blogPost.summary,
          images: [
            {
              url: `https://silverdust.vercel.app/images/blog/${blogPost.slug}/thumbnail.jpg`,
              width: 1200,
              height: 675,
              alt: blogPost.title,
            },
          ],
          site_name: "Silverdust",
          type: "article",
          locale: "id_ID",
        }}
      />
      <BlogPost blogPost={blogPost} />
    </Page>
  );
};

export async function getStaticPaths() {
  return {
    paths: allPosts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = ({ params }) => {
  const blogPost = allPosts.find(
    (post: Post) => post.slug === (params?.slug as string)
  );

  if (!blogPost) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      blogPost,
    },
  };
};

export default PostPage;
