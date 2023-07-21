import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyD-OasWd2EiUAtmcH3YC7op4hlFcMMwecI",
	authDomain: "can1rell-link.firebaseapp.com",
	projectId: "can1rell-link",
	storageBucket: "can1rell-link.appspot.com",
	messagingSenderId: "312876737463",
	appId: "1:312876737463:web:ef991ecbc9ad63dfaf7e32"
};

// Initialize Firebase client side service
export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();
export const storage = getStorage();
