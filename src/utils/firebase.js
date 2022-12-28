
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAeV2Lp3MYR0XrD6L5dDAgNveQvMvKy2U8",
  authDomain: "tenedores-app-rn.firebaseapp.com",
  projectId: "tenedores-app-rn",
  storageBucket: "tenedores-app-rn.appspot.com",
  messagingSenderId: "305723851296",
  appId: "1:305723851296:web:06729b742ead051c6fb245"
};

// Initialize Firebase
export const initFirebase = initializeApp(firebaseConfig);