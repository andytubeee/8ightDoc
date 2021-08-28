import React from 'react';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import { useRouter } from 'next/dist/client/router';

const DocumentListItem = ({ docName, dateCreated }) => {
  const localDateString = dateCreated?.toDate().toLocaleDateString();
  return (
    <div
      className='flex items-center border-b-2 mb-4 cursor-pointer hover:scale-105 
    duration-200 justify-between font-thin rounded-lg hover:bg-green-100 p-2'
    >
      <div className='flex gap-3'>
        <Icon
          className='inline-block'
          name='article'
          size='2xl'
          color='green'
        />
        <p className='flex-grow pl-5 truncate max-w-xl pr-10'>{docName}</p>
      </div>
      <p
        className='text-sm hover:text-xs'
        data-tip={new Date(dateCreated.seconds * 1000).toLocaleString()}
      >
        {localDateString}
      </p>
    </div>
  );
};

export default DocumentListItem;
