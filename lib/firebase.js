import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyANgtf6buGVaN6s005_9goEzxbQW_Pebyw",
  authDomain: "chatgpt-168e8.firebaseapp.com",
  projectId: "chatgpt-168e8",
  storageBucket: "chatgpt-168e8.appspot.com",
  messagingSenderId: "1083355446880",
  appId: "1:1083355446880:web:5715fe398e4944e5468d05",
};

// const app = initializeApp(firebaseConfig);
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore(app);

export { db };
