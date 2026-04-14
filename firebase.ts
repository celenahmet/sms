import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCLfFKSVDlFSOwqXZKK4GNQ64wXoPcFATo",
  authDomain: "contactforms-2f87a.firebaseapp.com",
  projectId: "contactforms-2f87a",
  storageBucket: "contactforms-2f87a.firebasestorage.app",
  messagingSenderId: "257411095702",
  appId: "1:257411095702:web:9d6aa447d457e62d68b6b7",
  measurementId: "G-H9M272ER6F"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
