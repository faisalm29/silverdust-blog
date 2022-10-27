import AnchorLink from "./AnchorLink";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";
import { useMDXComponent } from "next-contentlayer/hooks";
import { type Post } from "contentlayer/generated";

type BlogPostProps = {
  blogPost: Post;
};

const BlogPost = ({ blogPost }: BlogPostProps): JSX.Element => {
  const Component = useMDXComponent(blogPost.body.code);

  return (
    <article>
      <div className="border-b-[1px] border-secondary py-16">
        <h1 className="text-[64px] font-black uppercase leading-none tracking-tighter">
          {blogPost.title}
        </h1>
        <time className="mb-4 inline-block text-[64px] font-black uppercase leading-none tracking-tighter text-accent">
          {format(parseISO(blogPost.publishedAt), "d LLLL yyyy", {
            locale: id,
          })}
        </time>
        <p>{`${blogPost.readingTime.text} · 100 views`}</p>
      </div>
      <div className="relative mb-4 gap-6 border-b-[1px] border-b-secondary pt-4 pb-16 md:flex md:items-start md:justify-between">
        <div className="top-16 mb-8 md:sticky md:w-1/2">
          <figure>
            <Image
              src={blogPost.thumbnail.imageUrl}
              width="100%"
              height="89vh"
              layout="responsive"
              objectFit="cover"
              alt={blogPost.title}
            />
            <figcaption className="mt-4 h-[10%] w-full text-center text-accent">
              Foto oleh{" "}
              <a href={blogPost.thumbnail.fromUrl}>
                {blogPost.thumbnail.author}
              </a>{" "}
              dari {blogPost.thumbnail.source}
            </figcaption>
          </figure>
        </div>
        <div className="prose prose-headings:mb-4 prose-headings:mt-16 prose-headings:leading-none prose-headings:tracking-tighter prose-headings:text-secondary prose-h2:text-[45px] prose-h3:text-[32px] prose-p:text-secondary prose-a:font-normal md:w-1/2">
          <Component />
        </div>
      </div>
    </article>
  );
};

export default BlogPost;
