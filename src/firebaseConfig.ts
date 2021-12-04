// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaqmeHzjfx2_Hdbk-g3PRz35mBsPGSsfk",
  authDomain: "wakuplanner.firebaseapp.com",
  projectId: "wakuplanner",
  storageBucket: "wakuplanner.appspot.com",
  messagingSenderId: "860117102375",
  appId: "1:860117102375:web:519fc5b42ec3c70ff88302"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;