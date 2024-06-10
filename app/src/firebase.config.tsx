import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCKAvQ3Ftm_tA9F4TQL0A6goqnRw3DzUsA",
  authDomain: "gymapp-klav.firebaseapp.com",
  projectId: "gymapp-klav",
  storageBucket: "gymapp-klav.appspot.com",
  messagingSenderId: "899395829593",
  appId: "1:899395829593:web:b3666ff416111b82821648"
};

export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const db = getFirestore(firebase);