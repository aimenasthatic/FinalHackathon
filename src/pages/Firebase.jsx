// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAHgjJUklzK_dS5mJKFh0GxfGxQalTwXMU",
    authDomain: "bookify-f1f10.firebaseapp.com",
    projectId: "bookify-f1f10",
    storageBucket: "bookify-f1f10.firebasestorage.app",
    messagingSenderId: "848409718137",
    appId: "1:848409718137:web:aaa91f5c0894497a5a53a8",
    measurementId: "G-PLLMW0KS0Z"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);