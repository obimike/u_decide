// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  orderBy,
} from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  updatePassword,
  signOut,
} from "firebase/auth";

import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDg-cGzN_XgkNcSG8bmQ3Biosmpv1AvEBc",
  authDomain: "udecide-68af9.firebaseapp.com",
  projectId: "udecide-68af9",
  storageBucket: "udecide-68af9.appspot.com",
  messagingSenderId: "472986180861",
  appId: "1:472986180861:web:1c5274ab8d8f9899e63294",
  measurementId: "G-SMMTRF84TF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
  auth,
  db,
  collection,
  getDocs,
  query,
  where,
  addDoc,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
  updateDoc,
  storage,
  ref,
  getDownloadURL,
  uploadBytes,
  updatePassword,
  orderBy,
};
