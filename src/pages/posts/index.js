import Head from 'next/head';
import AllPosts from '../../../components/posts/AllPosts';
import { getAllPosts } from '../../../lib/post-util';

export default function AllPostPage(props) {
  const { posts } = props;
  return (
    <>
     <Head>
      <title>All Posts</title>
      <meta name='description' content='A list of all programming-related tutorials and posts.' />
    </Head>
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
