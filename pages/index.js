import Head from 'next/head';
import Header from '../components/Header';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';

export default function Home() {
  return (
    <div>
      <Head>
        <title>8ightDoc</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <section className='bg-green-50'>
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
          <div className='flex'></div>
        </div>
      </section>
    </div>
  );
}
