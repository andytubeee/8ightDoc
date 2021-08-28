import React from 'react';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { useRouter } from 'next/dist/client/router';
import Swal from 'sweetalert2';
import { db } from '../firebase';

const DocumentListItem = ({ docName, dateCreated, session, id }) => {
  const localDateString = dateCreated?.toDate().toLocaleDateString();
  const router = useRouter();
  const operationsPopup = () => {
    Swal.fire({
      title: 'Operations',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Change title`,
      denyButtonText: `Delete`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        showChangeDocNamePopup();
      } else if (result.isDenied) {
        showDeletePopup();
      }
    });
  };

  const showChangeDocNamePopup = () => {
    Swal.fire({
      title: 'Change name',
      input: 'text',
      inputAttributes: {
        placeholder: 'New name',
      },
      showCancelButton: true,
    }).then(
      (res) =>
        res.value &&
        changeDocName(res.value)
          .then(() => {
            Swal.fire('Success', '', 'success').then(() => location.reload());
          })
          .catch((err) => Swal.fire('Error', 'Please try again', 'error'))
    );
  };

  const changeDocName = async (name) => {
    if (!name) return;
    await db
      .collection('userDocs')
      .doc(session.user.email)
      .collection('docs')
      .doc(id)
      .update({
        fileName: name,
      });
  };

  const showDeletePopup = () => {
    Swal.fire({
      title: 'Are you sure?',
      showCancelButton: true,
      confirmButtonText: 'Delete',
    }).then((res) => {
      if (res.isConfirmed) {
        deleteDocument();
      }
    });
  };

  const deleteDocument = async () => {
    await db
      .collection('userDocs')
      .doc(session.user.email)
      .collection('docs')
      .doc(id)
      .delete()
      .then(() => {
        Swal.fire('Deleted', '', 'success').then(() => location.reload());
      })
      .catch((error) => Swal.fire('Error', 'Error deleting document', 'error'));
  };

  return (
    <div
      //   onClick={() => router.push(`/doc/${id}`)}
      className='flex items-center border-b-2 mb-4 cursor-pointer hover:scale-105 
    duration-200 justify-between font-thin rounded-lg hover:bg-green-100 p-2'
    >
      <div className='flex gap-3'>
        <Icon
          className='inline-block'
          name='article'
          size='3xl'
          color='green'
        />
        <p className='flex-grow pl-5 truncate max-w-xl pr-10'>{docName}</p>
      </div>
      <div className='flex items-center'>
        <p
          className='text-sm hover:text-xs'
          data-tip={new Date(dateCreated.seconds * 1000).toLocaleString()}
        >
          {localDateString}
        </p>
        <Button
          color='gray'
          buttonType='outline'
          rounded
          iconOnly
          ripple='light'
          className='border-0'
          onClick={operationsPopup}
        >
          <Icon name='more_vert' size='2xl' />
        </Button>
      </div>
    </div>
  );
};

export default DocumentListItem;
