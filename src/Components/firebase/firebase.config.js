// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByGZiemZLZCiGTKROaDb9f92xmlQCbgik",
  authDomain: "greenfork-d6f5c.firebaseapp.com",
  projectId: "greenfork-d6f5c",
  storageBucket: "greenfork-d6f5c.firebasestorage.app",
  messagingSenderId: "581679098458",
  appId: "1:581679098458:web:2a8190f5253ac10a900663"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app