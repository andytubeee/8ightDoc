import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../public/assets/lottie/error_cross.json';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { useRouter } from 'next/router';

const DocError = () => {
  const router = useRouter();
  const defaultOptions = {
    loop: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className='min-w-screen min-h-screen flex flex-col justify-center items-center'>
      <Lottie
        isClickToPauseDisabled={true}
        options={defaultOptions}
        height={400}
        width={400}
      />
      <p className='text-2xl text-red-700 mb-10 inline-block'>
        Document not found!
      </p>
      <Button
        color='red'
        className='inline-block'
        onClick={() => router.push('/')}
      >
        <Icon name='arrow_back' /> Go Back
      </Button>
    </div>
  );
};

export default DocError;
