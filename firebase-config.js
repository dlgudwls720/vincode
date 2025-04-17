// firebase-config.js
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC7kdoSzW8_KfBYnEwrTyA9m9f7sUkrzms",
  authDomain: "vincode-5d7dc.firebaseapp.com",
  projectId: "vincode-5d7dc",
  storageBucket: "vincode-5d7dc.appspot.com",
  messagingSenderId: "50341043073",
  appId: "1:50341043073:web:f22ba9b080b4e40f4f2680"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
