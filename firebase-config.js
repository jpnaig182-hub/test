// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDcAjMKFAnNBiFfIhekOPtRadiCb0Ly8Ng",
  authDomain: "projectbahandi-7149a.firebaseapp.com",
  projectId: "projectbahandi-7149a",
  storageBucket: "projectbahandi-7149a.firebasestorage.app",
  messagingSenderId: "1017170558784",
  appId: "1:1017170558784:web:ca1c6942f68c2fec9304a5",
  measurementId: "G-FS77PDWKSK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// MAKE SURE THESE TWO LINES ARE AT THE BOTTOM OF THE FILE:
export const db = getFirestore(app);
export const auth = getAuth(app);
