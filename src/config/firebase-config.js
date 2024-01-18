// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBJIsvQ5nHhM9z_r9GYBlWheleGLc-QCuY",
  authDomain: "expense-tracker-45e29.firebaseapp.com",
  projectId: "expense-tracker-45e29",
  storageBucket: "expense-tracker-45e29.appspot.com",
  messagingSenderId: "415826672062",
  appId: "1:415826672062:web:3519d090a58cfe69c421ef",
  measurementId: "G-641BR58CMX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app)
const analytics = getAnalytics(app);

//firebase login
//firebase init
//firebase deploy