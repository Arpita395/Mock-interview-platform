import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAeog5JFUrjegANqjNK9rw_JZdBibdDsM4",
  authDomain: "prepwise-26d9a.firebaseapp.com",
  projectId: "prepwise-26d9a",
  storageBucket: "prepwise-26d9a.firebasestorage.app",
  messagingSenderId: "914625586239",
  appId: "1:914625586239:web:bdfcf909d094d7dade848a",
  measurementId: "G-3SHTEHKT3M"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()

export const auth= getAuth(app)
export const db= getFirestore(app)
