// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD3_8_aj0YZkI59FZ4Qj8d9AFsXXIXh9ac",
    authDomain: "genius-car-services-pro.firebaseapp.com",
    projectId: "genius-car-services-pro",
    storageBucket: "genius-car-services-pro.appspot.com",
    messagingSenderId: "539811795402",
    appId: "1:539811795402:web:f7e77affa1cbbd1f6cbf33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;