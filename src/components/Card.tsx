import Image from "next/image";
import Link from "next/link";
import { Post } from "contentlayer/generated";
import { format, parseISO } from "date-fns";
import { id } from "date-fns/locale";

const Card = ({ post }: { post: Post }): JSX.Element => {
  return (
    <div>
      <div className="mb-4">
        <Image
          src={post.thumbnail.imageUrl}
          width={2024}
          height={1518}
          layout="responsive"
          objectFit="cover"
          alt={post.title}
        />
      </div>
      <div>
        <Link href={`/blog/${post.slug}`}>
          <a>
            <h2 className="text-2xl font-black uppercase leading-none tracking-tight">
              {post.title}
            </h2>
          </a>
        </Link>

        <time className="mb-4 inline-block text-2xl font-black uppercase leading-none tracking-tight text-accent">
          {format(parseISO(post.publishedAt), "d LLLL yyyy", { locale: id })}
        </time>
        <p>{post.summary}</p>
      </div>
    </div>
  );
};

export default Card;
