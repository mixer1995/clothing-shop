import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyACzvjjB4r4u1mrVtJSHFtlpPvj7SC00js",
    authDomain: "clothing-db-c55a9.firebaseapp.com",
    projectId: "clothing-db-c55a9",
    storageBucket: "clothing-db-c55a9.appspot.com",
    messagingSenderId: "800299660788",
    appId: "1:800299660788:web:b52bad62260781e919b5a1"
};

const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    // const userDocRef = doc(db, 'users', )
}