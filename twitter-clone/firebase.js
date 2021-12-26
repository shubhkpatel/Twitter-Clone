// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBueIGlTYHQPRBPbGZgEuZlmAcsJ9AZrHk",
    authDomain: "twitter-clone-429c1.firebaseapp.com",
    projectId: "twitter-clone-429c1",
    storageBucket: "twitter-clone-429c1.appspot.com",
    messagingSenderId: "730498406527",
    appId: "1:730498406527:web:3435563bed7eb111e7c74a"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };