import AllPosts from '../../../components/posts/AllPosts';
import { getAllPosts } from '../../../lib/post-util';

export default function AllPostPage(props) {
  const { posts } = props;
  return (
    <>
      <AllPosts posts={posts} />
    </>
  );
}

export function getStaticProps() {
  const allPosts = getAllPosts();
  return {
    props: {
      posts: allPosts,
    },
    revalidate: 60,
  };
}
