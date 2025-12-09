import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmV5Uk4DHYP6EkLqs3nP_KtppS6h0cEp8",
  authDomain: "file-sharing-c759f.firebaseapp.com",
  projectId: "file-sharing-c759f",
  storageBucket: "file-sharing-c759f.appspot.app", // ✅ Corrected
  messagingSenderId: "1066203995384",
  appId: "1:1066203995384:web:00f432fe7c58bda5976f0d",
  measurementId: "G-MJQ14XR01V",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app); // ✅ Added Firebase Storage

// Ensure Analytics runs only on the client-side
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}

export { app, storage, analytics };
