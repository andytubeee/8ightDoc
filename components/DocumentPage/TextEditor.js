import React, { useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import dynamic from 'next/dynamic';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  { ssr: false }
);

const TextEditor = () => {
  const [editorState, setEditorState] = useState();
  const onEditorStateChange = () => {};
  return (
    <div className='bg-gray-100 m-5 min-h-screen pb-20'>
      <Editor toolbarClassName='flex sticky top-0 z-50 !justify-self-center !justify-center !self-center' />
    </div>
  );
};

export default TextEditor;
