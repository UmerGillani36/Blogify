import AllPosts from '../../../components/posts/AllPosts';
import { getFeaturedPosts } from '../../../lib/post-util';

export default function AllPostPage(props) {
  const { posts } = props;
  return (
    <>
      <AllPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();
  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
}
