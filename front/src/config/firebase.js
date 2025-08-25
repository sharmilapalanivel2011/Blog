
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyB98KxDz46xJKWhyqkM0u59v9xkWUqOhr4",
  authDomain: "blog-app-5d9ee.firebaseapp.com",
  projectId: "blog-app-5d9ee",
  storageBucket: "blog-app-5d9ee.firebasestorage.app",
  messagingSenderId: "826985143555",
  appId: "1:826985143555:web:28d6856029abb43c189d36",
  measurementId: "G-33YFYRLYLZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth