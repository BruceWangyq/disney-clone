import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBdCJTNmTU1IbSVl6fduZLc_c-TC_bBI1g",
  authDomain: "disney-clone-a9126.firebaseapp.com",
  projectId: "disney-clone-a9126",
  storageBucket: "disney-clone-a9126.appspot.com",
  messagingSenderId: "634761365455",
  appId: "1:634761365455:web:03d2facd5a4429aa7774ba"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
