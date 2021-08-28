import Lottie from 'react-lottie';
import * as animationData from '../public/assets/lottie/404_error.json';

const NotFound = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <Lottie
        className='overflow-hidden'
        isClickToPauseDisabled={true}
        options={defaultOptions}
        width={500}
        height={500}
      />
    </div>
  );
};

export default NotFound;
