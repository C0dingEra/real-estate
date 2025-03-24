// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "real-estate-d6013.firebaseapp.com",
    projectId: "real-estate-d6013",
    storageBucket: "real-estate-d6013.firebasestorage.app",
    messagingSenderId: "639662308552",
    appId: "1:639662308552:web:7410b9cb71c1a20b7839fd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);