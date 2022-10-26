import { GetStaticProps } from "next";
import { allPosts, type Post } from "contentlayer/generated";

type PostPageProps = {
  blogPost: Post;
};

const PostPage = ({ blogPost }: PostPageProps) => {
  return <h1>{blogPost.title}</h1>;
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
