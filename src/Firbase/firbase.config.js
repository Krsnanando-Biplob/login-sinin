// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2yDhdNPKxDX5NoulXUQFhC7IgkEkMY3E",
  authDomain: "login-sin-up-f80f1.firebaseapp.com",
  projectId: "login-sin-up-f80f1",
  storageBucket: "login-sin-up-f80f1.appspot.com",
  messagingSenderId: "107855333514",
  appId: "1:107855333514:web:57f0e5c7e961a5e5e18573"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;

