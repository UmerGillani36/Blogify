import PostHeader from './PostHeader';
import classes from './PostContent.module.css';
import ReactMarkdown from 'react-markdown';
import Image from 'next/image';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';
import css from 'react-syntax-highlighter/dist/cjs/languages/prism/css';

SyntaxHighlighter.registerLanguage('js', js);
SyntaxHighlighter.registerLanguage('css', css);

const PostContent = (props) => {
  const { post } = props;
  const imagePath = `/images/posts/${post.image}`;
  const customRenderers = {
    // img(image) {
    //   return (
    //     <Image
    //       src={`/images/posts/${image.src}`}
    //       alt={image.alt}
    //       width={600}
    //       height={300}
    //     />
    //   );
    // },
    p(paragraph) {
      const { node } = paragraph;

      if (node.children[0].tagName === 'img') {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${image.properties.src}`}
              alt={image.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { className, children } = code;
      const language = className.split('-')[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          // style={dark}
          language={language}
          children={children}
        ></SyntaxHighlighter>
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown components={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
};

export default PostContent;
