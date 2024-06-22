import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCORycN-cB1ypOUB2aNC0pn2LIVF7BRppg",
  authDomain: "netflix-clone-3b786.firebaseapp.com",
  projectId: "netflix-clone-3b786",
  storageBucket: "netflix-clone-3b786.appspot.com",
  messagingSenderId: "564711179785",
  appId: "1:564711179785:web:e1b4575f94187ff11c1ad8",
  measurementId: "G-QKW12DXTJH"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);