
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKQhOUB0GlD46xA31h9insIk8YcyVgvTI",
  authDomain: "event-management-auth-4edb1.firebaseapp.com",
  projectId: "event-management-auth-4edb1",
  storageBucket: "event-management-auth-4edb1.appspot.com",
  messagingSenderId: "828488302827",
  appId: "1:828488302827:web:efded883bec2677b377eae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth
