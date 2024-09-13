// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAth0wLFx_rlgIOiAo4Zy5d17cfNRzg9jk",
  authDomain: "typescript-9ef59.firebaseapp.com",
  projectId: "typescript-9ef59",
  storageBucket: "typescript-9ef59.appspot.com",
  messagingSenderId: "743902742702",
  appId: "1:743902742702:web:bd7e88506f9a7d4b6ac53f",
  measurementId: "G-KPC1DTPWFZ",
  databaseURL:"https://typescript-9ef59-default-rtdb.firebaseio.com",
};


// Initialize Firebase

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const analytics = getAnalytics(app);
 