// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAV2smkl5q5DJ6per3XMaKKNBF4wkEVN9g",
  authDomain: "new-assignment-b1d40.firebaseapp.com",
  projectId: "new-assignment-b1d40",
  storageBucket: "new-assignment-b1d40.appspot.com",
  messagingSenderId: "702615766868",
  appId: "1:702615766868:web:327b318aaf8b1017432ac1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;