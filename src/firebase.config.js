// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwB71pLBuG6mw5Zr7lfgNJ9HpxFYWP_ZI",
  authDomain: "portfolio-e94f4.firebaseapp.com",
  projectId: "portfolio-e94f4",
  storageBucket: "portfolio-e94f4.appspot.com",
  messagingSenderId: "131017207523",
  appId: "1:131017207523:web:2d99f30ba0c823835f9fd6",
  measurementId: "G-924XPP83GB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db=getFirestore();