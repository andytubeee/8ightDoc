import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import Image from 'next/image';
import PlusIcon from '../public/assets/icons8-plus-+.svg';
const StartDocument = () => {
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
          <div className='flex items-center justify-center h-52 w-40 bg-white rounded-md cursor-pointer group mb-2 border-2'>
            {' '}
            <Image
              src={PlusIcon}
              width={40}
              height={40}
              className='group-hover:scale-90'
            />
          </div>
          <p>Blank</p>
        </div>
      </div>
    </section>
  );
};

export default StartDocument;
