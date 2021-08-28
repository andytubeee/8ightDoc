import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';
import StartDocument from '../components/StartDocument';
import UserDocuments from '../components/UserDocuments';
import { getSession, useSession } from 'next-auth/client';
import SignInPage from '../components/SignIn';

export default function Home({ session }) {
  if (!session) return <SignInPage />;

  return (
    <div>
      <Header />
      <StartDocument />
      <UserDocuments />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session,
    }, // will be passed to the page component as props
  };
}
