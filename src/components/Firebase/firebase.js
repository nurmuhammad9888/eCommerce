// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsR9u1Ui1TYt883MlXxWEv5FXQL6nK5nA",
    authDomain: "ecommerce-8bb29.firebaseapp.com",
    projectId: "ecommerce-8bb29",
    storageBucket: "ecommerce-8bb29.appspot.com",
    messagingSenderId: "905379163332",
    appId: "1:905379163332:web:73c48bc923a57d9ff86d91",
    measurementId: "G-GY3E9ES1VQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export default app;