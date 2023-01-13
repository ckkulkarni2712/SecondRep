// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCyNvI943QJQ97RL8x0mDZFIBAfc2oZ3VE",
    authDomain: "tinder-mern-81c81.firebaseapp.com",
    databaseURL: "https://tinder-mern-81c81-default-rtdb.firebaseio.com",
    projectId: "tinder-mern-81c81",
    storageBucket: "tinder-mern-81c81.appspot.com",
    messagingSenderId: "571905125410",
    appId: "1:571905125410:web:a15259ad92c3166a98ae7b",
    measurementId: "G-28DQ1B0VEN"
};
const firebaseApp =
firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;