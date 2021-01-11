import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB_CIKt6uRq5SF7rTOpy8tXX7tgcqyV-oc",
    authDomain: "linkedin-83687.firebaseapp.com",
    projectId: "linkedin-83687",
    storageBucket: "linkedin-83687.appspot.com",
    messagingSenderId: "950318406283",
    appId: "1:950318406283:web:c0b98ee67c721e6876d28e"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};