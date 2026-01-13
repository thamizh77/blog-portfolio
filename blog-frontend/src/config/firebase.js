// Firebase core
import { initializeApp } from "firebase/app";

// Firebase Authentication
import { getAuth } from "firebase/auth";

// 🔥 Your Firebase configuration (this is OK to keep)
const firebaseConfig = {
  apiKey: "AIzaSyCCnuzK1MD-GQ5KVjsnFg5EAiTrJf_iAx8",
  authDomain: "blog-portfolio-7751a.firebaseapp.com",
  projectId: "blog-portfolio-7751a",
  storageBucket: "blog-portfolio-7751a.firebasestorage.app",
  messagingSenderId: "211468074972",
  appId: "1:211468074972:web:adac0d6b89066dc2ce1919",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export auth (VERY IMPORTANT)
export const auth = getAuth(app);

export default app;
