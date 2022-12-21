import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAHD65KqBR76u0eljr1dtC8YWWGd6Hxhbw",
    authDomain: "pro-c71-89baa.firebaseapp.com",
    projectId: "pro-c71-89baa",
    storageBucket: "pro-c71-89baa.appspot.com",
    messagingSenderId: "779804564141",
    appId: "1:779804564141:web:946cdc7edc7954e5c2c424"
  };
  
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
