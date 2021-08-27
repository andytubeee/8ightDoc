import React from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../public/assets/under_construction_lottie.json';

const MobileWarning = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen text-center text-lg cursor-default'>
        <Lottie
          isClickToPauseDisabled={true}
          options={defaultOptions}
          height={400}
          width={400}
        />
        Temporarily not available for mobile/small screen
      </div>
    </>
  );
};

export default MobileWarning;
