// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
	apiKey: "AIzaSyBVGA4bV-0V1qEF4TfyHIguj7sFbk7VVxM",
	authDomain: "copy-18cd4.firebaseapp.com",
	projectId: "copy-18cd4",
	storageBucket: "copy-18cd4.appspot.com",
	messagingSenderId: "294090665437",
	appId: "1:294090665437:web:53b09ec92ad455974f1a34",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
