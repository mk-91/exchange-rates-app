import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyD3KjzplOko-z2oQWx9uuGBf-wgxcFbV8Y',
  authDomain: 'exchange-rates-app-fd9ef.firebaseapp.com',
  projectId: 'exchange-rates-app-fd9ef',
  storageBucket: 'exchange-rates-app-fd9ef.appspot.com',
  messagingSenderId: '512420697845',
  appId: '1:512420697845:web:33c9a7b263bbb1778f57bc',
  measurementId: 'G-FWXSMBFS7S',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
