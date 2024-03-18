// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "my-blog-3f1c3.firebaseapp.com",
  projectId: "my-blog-3f1c3",
  storageBucket: "my-blog-3f1c3.appspot.com",
  messagingSenderId: "197193287083",
  appId: "1:197193287083:web:fa0a9f30fea89143b4beee",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
