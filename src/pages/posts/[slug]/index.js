import Head from 'next/head';
import PostContent from '../../../../components/posts/post-details/PostContent';
import { getFileNames, getPostData } from '../../../../lib/post-util';

export default function PostDetailPage(props) {
  const { post } = props;
  return (
    <>
     <Head>
      <title>{props.post.title}</title>
      <meta name='description' content={props.post.excerpt} />
    </Head>
      <PostContent post={post} />
    </>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const post = getPostData(slug);
  return {
    props: {
      post: post,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const fileNames = getFileNames().map((slug) => slug.replace(/\.md$/, ''));
  return {
    paths: fileNames.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
