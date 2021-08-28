import firebase from 'firebase/compat/app';

const firebaseConfig = {
  apiKey: 'AIzaSyBcNKFQDTpkhCNyd0qwhXT-LROfZ_Qj-WA',
  authDomain: 'ight-doc.firebaseapp.com',
  projectId: 'ight-doc',
  storageBucket: 'ight-doc.appspot.com',
  messagingSenderId: '385183881295',
  appId: '1:385183881295:web:272283c7fbc89ef117f23a',
  measurementId: 'G-66RL67RN8V',
};

// Initialize Firebase

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

export default app;
