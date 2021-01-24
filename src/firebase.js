import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBYIKCgTeeYRib_GqKHlFuKJYawggBdZcQ",
  authDomain: "snapchat-4e5a4.firebaseapp.com",
  projectId: "snapchat-4e5a4",
  storageBucket: "snapchat-4e5a4.appspot.com",
  messagingSenderId: "343188508449",
  appId: "1:343188508449:web:64e19a218ebcce13da7860",
};

const firebaseapp = firebase.initializeApp(firebaseConfig);
const db = firebaseapp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
