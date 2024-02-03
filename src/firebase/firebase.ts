// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhMoM0dkz4Zr55S0448Q4L-tO53Q25K68",
  authDomain: "myidol-b0c72.firebaseapp.com",
  projectId: "myidol-b0c72",
  storageBucket: "myidol-b0c72.appspot.com",
  messagingSenderId: "431519660059",
  appId: "1:431519660059:web:d7ff758adc9c2822bea0be",
  measurementId: "G-YLNWZR47Y1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
