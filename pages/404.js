import Lottie from 'react-lottie';
import * as animationData from '../public/assets/lottie/404_error.json';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { useRouter } from 'next/router';

const NotFound = () => {
  const router = useRouter();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <Lottie
        className='overflow-hidden'
        isClickToPauseDisabled={true}
        options={defaultOptions}
        width={500}
        height={500}
      />
      <Button color='teal' onClick={() => router.back()}>
        <Icon name='arrow_back' size='2xl' /> Go Back
      </Button>
    </div>
  );
};

export default NotFound;
