// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBVu4PQtN2n6ggDCNCwx3qGDQjTEw0PTnI",
  authDomain: "saltyfans.firebaseapp.com",
  projectId: "saltyfans",
  storageBucket: "saltyfans.appspot.com",
  messagingSenderId: "1022462970723",
  appId: "1:1022462970723:web:c2167faa071967a0086156",
  measurementId: "G-DTVRSLR2T0"
};

// Initialize Firebase
const app = getApps.Length > 0 ? getApp() : initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, db, storage, analytics }