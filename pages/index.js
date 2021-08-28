import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';
import StartDocument from '../components/StartDocument';
import UserDocuments from '../components/UserDocuments';

export default function Home() {
  return (
    <div>
      <Head>
        <title>8ightDoc</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <StartDocument />
      <UserDocuments />
    </div>
  );
}
