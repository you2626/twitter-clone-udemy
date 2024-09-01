import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig={
    apiKey: "AIzaSyC2gq9VAA2HdCGtWeFyRlfFLdVLe40P-xM",
  authDomain: "twitter-clone-udemy-7174f.firebaseapp.com",
  projectId: "twitter-clone-udemy-7174f",
  storageBucket: "twitter-clone-udemy-7174f.appspot.com",
  messagingSenderId: "530950526226",
  appId: "1:530950526226:web:e98583057b65e1df064fcb"
};


const app=initializeApp(firebaseConfig);

const db =getFirestore(app);

export default db;