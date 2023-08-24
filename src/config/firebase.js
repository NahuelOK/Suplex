import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAoP3qY-i9IkeHbAlLpwRyiItRVNGKpgBQ",
  authDomain: "supex-lp.firebaseapp.com",
  projectId: "supex-lp",
  storageBucket: "supex-lp.appspot.com",
  messagingSenderId: "1000362705273",
  appId: "1:1000362705273:web:4e5dd2a554e8022eb3efa8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);