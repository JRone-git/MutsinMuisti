// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDmeK3SHWK-lH12HS03knM_GEls2UK2zU",
  authDomain: "mutsinmuisti.firebaseapp.com",
  databaseURL: "https://mutsinmuisti-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mutsinmuisti",
  storageBucket: "mutsinmuisti.appspot.com",
  messagingSenderId: "667765497681",
  appId: "1:667765497681:web:945a662812a8c762e8bd70",
  measurementId: "G-JWSNMM5D94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);