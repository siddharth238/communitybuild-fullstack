import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "slackback-3e0b2.firebaseapp.com",
  projectId: "slackback-3e0b2",
  storageBucket: "slackback-3e0b2.appspot.com",
  messagingSenderId: "1098223318446",
  appId: "1:1098223318446:web:764be43008ecfc7d20c43f",
  measurementId: "G-QJK7TYGNLL"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth, provider, db} 