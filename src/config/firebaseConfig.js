// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdYVY19xSKvHtIj7hVJlYGkY9Ab37zjII",
  authDomain: "chatapp-8d45e.firebaseapp.com",
  projectId: "chatapp-8d45e",
  storageBucket: "chatapp-8d45e.appspot.com",
  messagingSenderId: "2676817516",
  appId: "1:2676817516:web:0aeba056c01983dccaa249",
  measurementId: "G-SDP5V4E1NG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default firebaseConfig