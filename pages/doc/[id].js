import { useRouter } from 'next/router';
import Header from '../../components/DocumentPage/Header';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import Image from 'next/image';
import SignInPage from '../../components/SignIn';
import { useSession, getSession } from 'next-auth/client';
import { db } from '../../firebase';
import DocError from '../../components/DocumentPage/DocError';
import TextEditor from '../../components/DocumentPage/TextEditor';

const Doc = ({ session }) => {
  const router = useRouter();
  const { id } = router.query;

  if (!session) return <SignInPage />;

  const [value, loading] = useDocument(
    db.collection('userDocs').doc(session.user.email).collection('docs').doc(id)
  );

  if (loading) return null;
  try {
    return (
      <div className='min-w-screen min-h-screen flex flex-col'>
        <Header
          title={value?.data()?.fileName}
          pfp={session?.user?.image}
          session={session}
          id={id}
        />
        <TextEditor session={session} id={id} />
      </div>
    );
  } catch (err) {
    return <DocError />;
  }
};

export default Doc;

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session,
    }, // will be passed to the page component as props
  };
}
