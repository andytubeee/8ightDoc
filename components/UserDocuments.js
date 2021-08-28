import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { db } from '../firebase';
import { useEffect } from 'react';
import { useCollectionOnce } from 'react-firebase-hooks/firestore';
import DocumentListItem from './DocumentListItem';
import ReactTooltip from 'react-tooltip';

const UserDocuments = ({ session }) => {
  const [snapshot] = useCollectionOnce(
    db
      .collection('userDocs')
      .doc(session.user.email)
      .collection('docs')
      .orderBy('timestamp', 'desc')
  );
  return (
    <section className='bg-white px-10 md:px-0'>
      <div className='max-w-3xl mx-auto py-8'>
        <div className='flex items-center justify-between pb-5'>
          <p>My Documents</p>
          <div className='flex items-center'>
            <p>Date Created</p>
            <Button
              rounded
              iconOnly
              color='gray'
              buttonType='outline'
              className='border-0 ml-5'
            >
              <Icon name='folder' size='3xl' />
            </Button>
          </div>
        </div>
        {snapshot?.docs.map((doc) => (
          <>
            <DocumentListItem
              key={doc.id}
              docName={doc.data().fileName}
              dateCreated={doc.data().timestamp}
            />
            <ReactTooltip place='right' backgroundColor='#28B8B8' />
          </>
        ))}
      </div>
    </section>
  );
};

export default UserDocuments;
