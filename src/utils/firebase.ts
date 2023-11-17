// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgAkfGPVTK3yvVWbEM6TmPW7PORubnW1E",
  authDomain: "paul-music.firebaseapp.com",
  projectId: "paul-music",
  storageBucket: "paul-music.appspot.com",
  messagingSenderId: "186574764831",
  appId: "1:186574764831:web:a2e6c55e8cb9f6a09b0e2a",
  measurementId: "G-T99PWCTJT2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
