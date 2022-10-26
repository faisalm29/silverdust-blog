import Card from "./Card";
import { type Post } from "contentlayer/generated";

type PostsGalleryProps = {
  posts: Post[];
};

const PostsGallery = ({ posts }: PostsGalleryProps): JSX.Element => {
  return (
    <div className="mb-4 grid grid-cols-1 grid-rows-[auto] gap-6 border-b-[1px] border-b-secondary pb-16 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <Card post={post} key={post._id} />
      ))}
    </div>
  );
};

export default PostsGallery;
