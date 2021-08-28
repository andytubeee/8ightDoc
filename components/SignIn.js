import React from 'react';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import GoogleSVG from '../public/assets/Google.svg';
import LogoSVG from '../public/assets/navig-8.svg';
import Image from 'next/image';
import { signIn, signOut, useSession } from 'next-auth/client';

const SignInPage = () => {
  const [session, loading] = useSession();

  return (
    <div className='min-w-screen min-h-screen bg-[#28b8b8] flex flex-col justify-center items-center'>
      <div className='bg-white rounded-xl flex items-center px-10 justify-center mb-10 hover:scale-110 duration-300 ease-linear'>
        {' '}
        <Image src={LogoSVG} alt='8ight Logo' width={100} height={100} />
        <p className='text-2xl cursor-default'>8ight Doc</p>
      </div>
      <Button
        color='blueGray'
        buttonType='fill'
        size='lg'
        block={false}
        iconOnly={false}
        ripple='light'
        onClick={signIn}
      >
        <Image src={GoogleSVG} alt='Google Logo' width={20} height={20} />
        Sign In with Google
      </Button>
    </div>
  );
};

export default SignInPage;
