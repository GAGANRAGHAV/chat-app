// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOrE3qouOTTorCMnGXagkrX4FUIyfKLPU",
  authDomain: "chat1-e885b.firebaseapp.com",
  projectId: "chat1-e885b",
  storageBucket: "chat1-e885b.appspot.com",
  messagingSenderId: "738648313175",
  appId: "1:738648313175:web:840e07a8a2dce6efdac212",
  measurementId: "G-1K2CBMF1HB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();