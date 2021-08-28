import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import app from '../firebase';
import { useEffect } from 'react';
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  query,
} from 'firebase/firestore';

const UserDocuments = () => {
  useEffect(async () => {
    const db = getFirestore(app);
    const q = query(collection(db, 'users'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, ' => ', doc.data());
    });
  });

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
      </div>
    </section>
  );
};

export default UserDocuments;
