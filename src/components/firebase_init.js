// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnT8mw5ISnPxziPMd0sM2wsZ0Zr2Pu6W4",
    authDomain: "ema-jhon-cart-calcultaion.firebaseapp.com",
    projectId: "ema-jhon-cart-calcultaion",
    storageBucket: "ema-jhon-cart-calcultaion.appspot.com",
    messagingSenderId: "178525946094",
    appId: "1:178525946094:web:2f02eb1193ffe8bbddf3ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;