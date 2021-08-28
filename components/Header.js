import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import Image from 'next/image';
import Logo from '../public/assets/navig-8.svg';
import { getSession, useSession } from 'next-auth/client';

const Header = () => {
  const [session] = useSession();
  return (
    <header className='sticky top-0 z-50 px-4 py-4 shadow-md bg-[#28b8b8] flex items-center'>
      <Button
        className='md:inline-flex border-0 h-10 w-10 mr-3'
        color='white'
        buttonType='outline'
        ripple='dark'
        rounded={true}
        iconOnly={true}
      >
        <Icon name='menu' size='3xl' />
      </Button>
      <Image
        className='cursor-pointer'
        onClick={() => location.reload()}
        src={Logo}
        width={50}
        height={50}
      />
      <h1 className='md:inline-flex ml-2 text-gray-200'>8ight Docs</h1>
      <div className=' mx-5 md:mx-20 flex flex-grow items-center px-5 py-2 bg-gray-200 text-gray-500 rounded-lg ml-8 focus-within:shadow-md'>
        <Icon name='search' size='3xl' color='gray' />
        <input
          type='text'
          placeholder='Search'
          className='pl-5 py-1 rounded bg-transparent outline-none text-sm flex-grow'
        />
      </div>
      <Button
        className='md:inline-block border-0 h-10 w-10 ml-2 md:ml-10'
        color='white'
        buttonType='outline'
        ripple='dark'
        rounded={true}
        iconOnly={true}
      >
        <Icon name='apps' size='3xl' />
      </Button>
      <img
        loading='lazy'
        className='cursor-pointer h-10 w-10 rounded-full ml-2'
        alt='Profile picture'
        src={session?.user?.image}
      />
    </header>
  );
};

export default Header;
