import React, { useEffect, useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import dynamic from 'next/dynamic';
import { EditorState } from 'draft-js';
import { db } from '../../firebase';
import { convertToRaw, convertFromRaw } from 'draft-js';
import { useDocumentOnce } from 'react-firebase-hooks/firestore';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((module) => module.Editor),
  { ssr: false }
);

const TextEditor = ({ session, id }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [snapshot, loading] = useDocumentOnce(
    db.collection('userDocs').doc(session.user.email).collection('docs').doc(id)
  );
  useEffect(async () => {
    if (snapshot?.data()?.editorState)
      setEditorState(
        EditorState.createWithContent(
          convertFromRaw(snapshot?.data()?.editorState)
        )
      );
  }, [snapshot]);
  const onEditorStateChange = async (editorState) => {
    setEditorState(editorState);

    // Push to db
    await db
      .collection('userDocs')
      .doc(session.user.email)
      .collection('docs')
      .doc(id)
      .set(
        {
          editorState: convertToRaw(editorState.getCurrentContent()),
        },
        { merge: true }
      );
  };
  return (
    <div className='bg-gray-100 min-h-screen pb-20'>
      <Editor
        editorState={editorState}
        onEditorStateChange={onEditorStateChange}
        toolbarClassName='flex sticky top-0 z-50 !justify-self-center !justify-center !self-center'
        editorClassName='mt-6 mx-4 py-6 px-10 max-w-6xl !mx-auto bg-white shadow-lg focus-within:border border-2 rounded-lg'
      />
    </div>
  );
};

export default TextEditor;
