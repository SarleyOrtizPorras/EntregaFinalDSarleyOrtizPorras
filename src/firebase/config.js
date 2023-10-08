
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKETY,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_I,
  appId: process.env.REACT_APP_APP_ID,
  apiKey: "AIzaSyAT3mDiDthOveYWq2dr_wIx6BtjuL5Xjfk",
  authDomain: "ecommerce-94d90.firebaseapp.com",
  projectId: "ecommerce-94d90",
  storageBucket: "ecommerce-94d90.appspot.com",
  messagingSenderId: "790990907702",
  appId: "1:790990907702:web:a906c3c895b20fcdf1ab97"
};


const app = initializeApp(firebaseConfig);
export const querydb = getFirestore(app)