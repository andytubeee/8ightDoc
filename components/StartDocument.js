import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import Image from 'next/image';
import PlusIcon from '../public/assets/icons8-plus-+.svg';
import Swal from 'sweetalert2';
import { db } from '../firebase';
import firebase from 'firebase';

const StartDocument = ({ session }) => {
  const createNewDocumentPopup = () => {
    Swal.fire({
      title: 'Create a new document',
      input: 'text',
      inputAttributes: {
        placeholder: 'Document Name',
      },
      showCancelButton: true,
      confirmButtonText: 'Create',
      showLoaderOnConfirm: true,
    }).then((res) => {
      if (res.isConfirmed) {
        if (res.value.length <= 0)
          return Swal.fire('Error', 'Invalid document name', 'error');

        createNewDocument(res.value)
          .then((_) => {
            Swal.fire('Success', 'New document created', 'success');
          })
          .catch((err) => {
            Swal.fire('Error', 'Error: ' + err, 'error');
          });
      }
    });
  };
  const createNewDocument = async (title) => {
    if (!title) return;

    await db
      .collection('userDocs')
      .doc(session.user.email)
      .collection('docs')
      .add({
        fileName: title,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      });
  };
  return (
    <section className='bg-green-50 p-2'>
      <div className='max-w-3xl mx-auto'>
        <div className='py-3x flex justify-between items-center'>
          <h1 className='text-gray-700'>Start a new document</h1>
          <Button
            className='md:inline-flex border-0 h-10 w-10 mr-3'
            color='gray'
            buttonType='outline'
            ripple='dark'
            rounded={true}
            iconOnly={true}
          >
            <Icon name='more_vert' size='3xl' />
          </Button>
        </div>
        <div className=''>
          <div
            className='flex items-center justify-center h-52 w-40 bg-white rounded-md cursor-pointer group mb-2 border-2 hover:border-green-300 transform transition-all duration-1000'
            onClick={createNewDocumentPopup}
          >
            {' '}
            <Image src={PlusIcon} width={40} height={40} />
          </div>
          <p className='ml-2 mt-2 font-semibold text-sm text-gray-600 '>
            Blank
          </p>
        </div>
      </div>
    </section>
  );
};

export default StartDocument;
