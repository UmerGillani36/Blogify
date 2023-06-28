import Head from 'next/head';
import ContactForm from '../../../components/contact/ContactForm';

export default function Contact() {
  return (
    <>
     <Head>
      <title>Contact Me</title>
      <meta name='description' content='Send me your messages.' />
    </Head>
      <ContactForm />
    </>
  );
}
