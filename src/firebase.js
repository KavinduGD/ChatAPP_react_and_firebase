// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBttc1Vqknb8PYCxzpkDxwldIObDgZgN-g",
  authDomain: "chat-app-react-4bed9.firebaseapp.com",
  projectId: "chat-app-react-4bed9",
  storageBucket: "chat-app-react-4bed9.appspot.com",
  messagingSenderId: "956392969956",
  appId: "1:956392969956:web:e67aba7428138a0783fef1",
};
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
