import FeaturedPosts from '../../components/HomePage/FeaturedPosts';
import Hero from '../../components/HomePage/Hero';
import { getFeaturedPosts } from '../../lib/post-util';
import Head from 'next/head';
export default function Home(props) {
  return (
    <>
    <Head>
      <title>Umer' Blog</title>
      <meta name='description' content='I post about programming and web development.' />
    </Head>
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
