// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeyY0HA9KKVwXBpZTZBxrODlPw7hZ-hjw",
  authDomain: "feed-69e52.firebaseapp.com",
  databaseURL: "https://feed-69e52-default-rtdb.firebaseio.com",
  projectId: "feed-69e52",
  storageBucket: "feed-69e52.appspot.com",
  messagingSenderId: "995656564640",
  appId: "1:995656564640:web:b52276b1a55462ea4d2ec5",
  measurementId: "G-Z64HP8TVKJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const redesocial = getFirestore(app);
const storage = getStorage(app);
export{redesocial, storage};