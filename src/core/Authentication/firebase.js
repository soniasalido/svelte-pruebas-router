import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyCWKOXRCWFcecRyh1nqgpTWe5MWCeqI-ts",
    authDomain: "svelte-router-883a7.firebaseapp.com",
    projectId: "svelte-router-883a7",
    storageBucket: "svelte-router-883a7.appspot.com",
    messagingSenderId: "299665788751",
    appId: "1:299665788751:web:a7d16321a6c6c3cdc87f3a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

