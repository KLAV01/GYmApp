
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDgXnjNRXmuPmEfk5v4iKiAnJS6Ea5o60o",
  authDomain: "app-gym-e0341.firebaseapp.com",
  projectId: "app-gym-e0341",
  storageBucket: "app-gym-e0341.appspot.com",
  messagingSenderId: "155737682936",
  appId: "1:155737682936:web:dae5cb1d0a3a5ae5865c0d"
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = getFirestore(firebase);