import Logo from '../../public/assets/navig-8.svg';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import Swal from 'sweetalert2';
import { db } from '../../firebase';
import { signOut } from 'next-auth/client';

const Header = ({ title, pfp, session, id }) => {
  const router = useRouter();
  const HeaderMenu = ({ title: menuName }) => {
    return (
      <p className='cursor-pointer hover:bg-gray-200 first:ml-[-8px] px-2 rounded-md text-gray-500'>
        {menuName}
      </p>
    );
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
          .catch((err) => {
            console.log(err);
            Swal.fire('Error', 'Please try again', 'error');
          })
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

  const pfpOnclick = () => {
    Swal.fire({
      title: 'Profile',
      text: `${session.user.name.split(' ')[0]}, do you want to sign out?`,
      showCancelButton: true,
      icon: 'warning',
      confirmButtonText: 'Sign Out',
      denyButtonText: `Cancel`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        signOut()
          .then(router.push('/'))
          .catch((err) => {
            Swal.fire('Error', 'Failed to sign out!', 'error');
          });
      }
    });
  };
  return (
    <header className='flex items-center p-2 border-2'>
      <div className='w-16'>
        <Image
          src={Logo}
          className='cursor-pointer'
          onClick={() => router.push('/')}
        />
      </div>
      <div className='ml-3 flex-grow'>
        <p
          className='font-bold cursor-pointer'
          onClick={showChangeDocNamePopup}
        >
          {title}
        </p>
        <div className='flex mt-1'>
          <HeaderMenu title='File' />
          <HeaderMenu title='Edit' />
          <HeaderMenu title='View' />
          <HeaderMenu title='Insert' />
          <HeaderMenu title='Format' />
          <HeaderMenu title='Tools' />
        </div>
      </div>
      <Button className='mr-4' color='teal'>
        <Icon name='people' size='2xl' /> Share
      </Button>
      <img
        className='rounded-full inline-block w-10 h-10 cursor-pointer'
        src={pfp}
        onClick={pfpOnclick}
      />
    </header>
  );
};

export default Header;
