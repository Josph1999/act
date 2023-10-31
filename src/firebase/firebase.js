// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiwefKA6pM6bEv_pkUs7Wnd100bg9WVIs",
  authDomain: "georaffal.firebaseapp.com",
  projectId: "georaffal",
  storageBucket: "georaffal.appspot.com",
  messagingSenderId: "702429167281",
  appId: "1:702429167281:web:b9c04319dda20ecb002c90",
  measurementId: "G-BM7J48HFFY",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const db = getFirestore(app);
// const analytics = getAnalytics(app);
