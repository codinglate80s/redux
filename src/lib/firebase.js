// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_Y8F_lZRpZJsQsC4VHAhtng_bMrPITbE",
  authDomain: "redux-c317b.firebaseapp.com",
  projectId: "redux-c317b",
  storageBucket: "redux-c317b.firebasestorage.app",
  messagingSenderId: "817333414875",
  appId: "1:817333414875:web:683b7b25b4401375e1d5fe",
  measurementId: "G-SFTRS55D41"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);