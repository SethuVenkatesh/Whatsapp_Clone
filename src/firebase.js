import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   // apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   // authDomain: "chat-ab746.firebaseapp.com",
//   // projectId: "chat-ab746",
//   // storageBucket: "chat-ab746.appspot.com",
//   // messagingSenderId: "901216368405",
//   // appId: "1:901216368405:web:8ec942ee51611df5c49b1c",


  
// };
const firebaseConfig = {
  apiKey: "AIzaSyCF7gIvSW-gtUK1yUnB68-ppAZUr06Rvyo",
  authDomain: "whatsapp-final-81b2b.firebaseapp.com",
  projectId: "whatsapp-final-81b2b",
  storageBucket: "whatsapp-final-81b2b.appspot.com",
  messagingSenderId: "809924941216",
  appId: "1:809924941216:web:a41ed40a331d480c4840c5",
  measurementId: "G-6LXTHJT2J1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
