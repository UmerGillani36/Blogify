import PostHeader from './PostHeader';
import classes from './PostContent.module.css';
import ReactMarkdown from 'react-markdown';

const DUMMY_DATA = {
  title: 'Getting Started with NextJs',
  slug: 'getting-started-with-nextjs3',
  image: 'getting-started-nextjs.png',
  date: '2023-02-10',
  content: '# This is a first post',
};
const PostContent = () => {
  const imagePath = `/images/posts/${DUMMY_DATA.image}`;
  return (
    <article className={classes.content}>
      <PostHeader title={DUMMY_DATA.title} image={imagePath} />
      <ReactMarkdown>{DUMMY_DATA.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
