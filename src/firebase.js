import firebase from '../package.json';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD1cH3dqpu7hhYFvS0PJiBeb3eUWySFtiI",
    authDomain: "ecommerce-project-1361d.firebaseapp.com",
    projectId: "ecommerce-project-1361d",
    storageBucket: "ecommerce-project-1361d.appspot.com",
    messagingSenderId: "412058843795",
    appId: "1:412058843795:web:73735bad8064264831ab66",
    measurementId: "G-ZLSH8VZDG0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);


const auth = firebaseApp.auth();

export { auth };