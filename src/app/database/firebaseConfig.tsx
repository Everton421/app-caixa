import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAg0ASIbJH98nlF2w98QqLsipiiixZtv7g",
  authDomain: "caixa-d70f8.firebaseapp.com",
  projectId: "caixa-d70f8",
  storageBucket: "caixa-d70f8.firebasestorage.app",
  messagingSenderId: "620307102689",
  appId: "1:620307102689:web:f1c86d0e93d90d3e8a70a0",
  measurementId: "G-X9NN4EHHBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 