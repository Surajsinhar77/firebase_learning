// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-TyL7gng1G_bzfbqGg2bn3XqRzf7_wPo",
    authDomain: "learning-firebase-84e27.firebaseapp.com",
    projectId: "learning-firebase-84e27",
    storageBucket: "learning-firebase-84e27.appspot.com",
    messagingSenderId: "730465513813",
    appId: "1:730465513813:web:ec9e2628096b8fdf13ffdc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app);