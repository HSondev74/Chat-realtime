import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
     apiKey: "AIzaSyBIIxmiJx6k8BpjIRcHi95u_UuLt8neTFY",
     authDomain: "chat-realtime-5669a.firebaseapp.com",
     projectId: "chat-realtime-5669a",
     storageBucket: "chat-realtime-5669a.appspot.com",
     messagingSenderId: "504218458787",
     appId: "1:504218458787:web:394c1e5f34fe947eab7d16",
     measurementId: "G-XB7BH68915",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
