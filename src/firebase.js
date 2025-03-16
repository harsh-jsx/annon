import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDDQUVXtrauN3rxfvKqYpRo7_jd_aH5Ios",
  authDomain: "dairy-443f4.firebaseapp.com",
  projectId: "dairy-443f4",
  storageBucket: "dairy-443f4.firebasestorage.app",
  messagingSenderId: "801294764552",
  appId: "1:801294764552:web:6820a614d949c924d4dfbd",
  measurementId: "G-2T2NBST305",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
