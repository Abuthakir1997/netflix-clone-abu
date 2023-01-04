import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAssdQnJqw_6AwLgvISvSy8j1nF7FRmeI4",
    authDomain: "netflix-clone-450bf.firebaseapp.com",
    projectId: "netflix-clone-450bf",
    storageBucket: "netflix-clone-450bf.appspot.com",
    messagingSenderId: "609954181141",
    appId: "1:609954181141:web:fc0078a8a1184538501e1c"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();


export { app, auth, db }; 