// Import the functions you need from the SDKs you need
import {getAuth} from "firebase/auth"; 
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDTUh0u8srFGRfnaSVsHbTnuURe0Y_eklY",
  authDomain: "netflixgpt-a69e6.firebaseapp.com",
  projectId: "netflixgpt-a69e6",
  storageBucket: "netflixgpt-a69e6.appspot.com",
  messagingSenderId: "963719919078",
  appId: "1:963719919078:web:8f327bd83dbcc047a85227",
  measurementId: "G-LRWLT8M8ZP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const  auth = getAuth(); 