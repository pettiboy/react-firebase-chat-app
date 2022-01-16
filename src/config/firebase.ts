import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { firebaseConfig } from "./firebase.config";

// App
export const Firebase = initializeApp(firebaseConfig);

// database
export const db = getFirestore();

// auth
export const auth = getAuth();
export const Providers = { google: new GoogleAuthProvider() };
