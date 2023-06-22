import FeaturedPosts from '../../components/HomePage/FeaturedPosts';
import Hero from '../../components/HomePage/Hero';

const DUMMY_POSTS = [
  {
    title: 'Getting Started with NextJs',
    slug: 'getting-started-with-nextjs',
    image: 'getting-started-nextjs.png',
    date: '2023-02-10',
    excerpt:
      "The React Framework for the Web Used by some of the world's largest companies, Next. enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
  },
  {
    title: 'Getting Started with NextJs',
    slug: 'getting-started-with-nextjs2',
    image: 'getting-started-nextjs.png',
    date: '2023-02-10',
    excerpt:
      "The React Framework for the Web Used by some of the world's largest companies, Next. enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
  },
  {
    title: 'Getting Started with NextJs',
    slug: 'getting-started-with-nextjs3',
    image: 'getting-started-nextjs.png',
    date: '2023-02-10',
    excerpt:
      "The React Framework for the Web Used by some of the world's largest companies, Next. enables you to create full-stack Web applications by extending the latest React features, and integrating powerful Rust-based JavaScript tooling for the fastest builds.",
  },
];
export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </>
  );
}
