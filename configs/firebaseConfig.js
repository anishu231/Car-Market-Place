// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage}  from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-listing-e8613.firebaseapp.com",
  projectId: "car-listing-e8613",
  storageBucket: "car-listing-e8613.firebasestorage.app",
  messagingSenderId: "473406159324",
  appId: "1:473406159324:web:478878e94731c4d3817719",
  measurementId: "G-54X6L43Q4H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);