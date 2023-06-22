import FeaturedPosts from '../../components/HomePage/FeaturedPosts';
import Hero from '../../components/HomePage/Hero';
import { getFeaturedPosts } from '../../lib/post-util';

export default function Home(props) {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={props.posts} />
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
