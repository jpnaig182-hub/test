// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyDcAjMKFAnNBiFfIhekOPtRadiCb0Ly8Ng",
  authDomain: "projectbahandi-7149a.firebaseapp.com",
  projectId: "projectbahandi-7149a",
  storageBucket: "projectbahandi-7149a.firebasestorage.app",
  messagingSenderId: "1017170558784",
  appId: "1:1017170558784:web:38295ec1332f66e59304a5",
  measurementId: "G-R0BSKY8X3D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);