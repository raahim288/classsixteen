// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEne8V5w3Y6kqCQTGqzNGSO2mpUEl0bmM",
  authDomain: "raahim-b6888.firebaseapp.com",
  projectId: "raahim-b6888",
  storageBucket: "raahim-b6888.appspot.com",
  messagingSenderId: "147299509630",
  appId: "1:147299509630:web:a0a875d9b3007917b87f2f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
export default auth;