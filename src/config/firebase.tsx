// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyDp6x9BV8eMhMlTzCEyQYwtJ6oB0ysCk1Q",
  authDomain: "flashcards-63968.firebaseapp.com",
  projectId: "flashcards-63968",
  storageBucket: "flashcards-63968.appspot.com",
  messagingSenderId: "541345269321",
  appId: "1:541345269321:web:e1f6ccedc69aacc4eb6198",
  measurementId: "G-6Z1S546GRT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
