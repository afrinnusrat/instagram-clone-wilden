import firebase from 'firebase';

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyDV5J2RwrHSWtv_6cBsiYdxPkvGt76VATI",
  authDomain: "instagram-clone-wilden.firebaseapp.com",
  databaseURL: "https://instagram-clone-wilden.firebaseio.com",
  projectId: "instagram-clone-wilden",
  storageBucket: "instagram-clone-wilden.appspot.com",
  messagingSenderId: "566330294175",
  appId: "1:566330294175:web:8f67a8cc6575d65d4387aa",
  measurementId: "G-8YLCC0M29Q"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export default { db, auth, storage };