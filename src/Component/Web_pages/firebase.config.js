// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBuStLiyPDXiN_-iJ0uYNxtyIgNm1-SFvU",
  authDomain: "fooddelivery-1f798.firebaseapp.com",
  projectId: "fooddelivery-1f798",
  storageBucket: "fooddelivery-1f798.appspot.com",
  messagingSenderId: "492943919565",
  appId: "1:492943919565:web:73ad32a0728021ea20dc84",
  measurementId: "G-TP3S37GSEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
