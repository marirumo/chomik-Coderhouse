import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAEUZlfcik71dDNc-qFd268mSY4PIj-Tos",
  authDomain: "producto-889fe.firebaseapp.com",
  databaseURL: "https://producto-889fe.firebaseio.com",
  projectId: "producto-889fe",
  storageBucket: "producto-889fe.appspot.com",
  messagingSenderId: "319963716061",
  appId: "1:319963716061:web:49bf346824a205d8eb7e34",
  measurementId: "G-0F952ZX0EZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDB = getFirestore(app)

export default firestoreDB