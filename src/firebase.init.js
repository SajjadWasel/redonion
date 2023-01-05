// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOqyuSmEwVV5dKM_uUYIOYgrxJgM10-tA",
  authDomain: "red-onion-one.firebaseapp.com",
  projectId: "red-onion-one",
  storageBucket: "red-onion-one.appspot.com",
  messagingSenderId: "645254778230",
  appId: "1:645254778230:web:0d70e359ab3dd1923c3e57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;