import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1cH3dqpu7hhYFvS0PJiBeb3eUWySFtiI",
  authDomain: "ecommerce-project-1361d.firebaseapp.com",
  projectId: "ecommerce-project-1361d",
  storageBucket: "ecommerce-project-1361d.appspot.com",
  messagingSenderId: "412058843795",
  appId: "1:412058843795:web:73735bad8064264831ab66",
  measurementId: "G-ZLSH8VZDG0"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };



