// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'
import 'firebase/firestore';
import { getFirestore } from 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAJ_EvMxGX3bFv4dWPPZWmyG4xXmjq-uzs",
    authDomain: "joe-shop-16604.firebaseapp.com",
    projectId: "joe-shop-16604",
    storageBucket: "joe-shop-16604.appspot.com",
    messagingSenderId: "1047993342132",
    appId: "1:1047993342132:web:88700739882db4a1811fe1",
    measurementId: "G-TNTYBXFX8J"
  };

const app = !firebase.apps.length ? 
firebase.initializeApp(firebaseConfig) 
: firebase.app();

const db = app.firestore()

export default db
