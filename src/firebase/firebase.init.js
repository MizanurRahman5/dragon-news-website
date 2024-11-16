// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDI58aR2cqcdU18t3YXlUwQZDEVKJz3jrs",
  authDomain: "dragon-news-f164c.firebaseapp.com",
  projectId: "dragon-news-f164c",
  storageBucket: "dragon-news-f164c.firebasestorage.app",
  messagingSenderId: "9255421081",
  appId: "1:9255421081:web:5f93a8f9fa5421f69b2408"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;