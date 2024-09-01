import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCImvFAosFQGQgjRF7O3PBqsU68zyvFySU",
    authDomain: "paisa-35aa3.firebaseapp.com",
    projectId: "paisa-35aa3",
    storageBucket: "paisa-35aa3.appspot.com",
    messagingSenderId: "437744068455",
    appId: "1:437744068455:web:5261b254ce95a0874271c2"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
