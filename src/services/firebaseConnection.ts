import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAFga4CAEfIH2AF3FfMyUukh5SibgFKw1k",
  authDomain: "reactlinks-3e6f9.firebaseapp.com",
  projectId: "reactlinks-3e6f9",
  storageBucket: "reactlinks-3e6f9.appspot.com",
  messagingSenderId: "365471805490",
  appId: "1:365471805490:web:efabde879b31add49c0c2b"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }