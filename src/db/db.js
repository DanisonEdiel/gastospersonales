import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATA_BASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKER,
  messagingSenderId: process.env.VUE_APP_MESSAGIN_SENDER_ID,
  appId: process.env.VUE_APP_ID,
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
