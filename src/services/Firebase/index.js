import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, onValue, off } from "firebase/database";

export const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREABSE_DATABASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
});
export const database = getDatabase(app);
const listeners = {};

export const fetchValue = async (path) => {
  try {
    const snapshot = await get(ref(database, path));
    return snapshot.val();
  } catch (err) {
    console.error("Error fetching data:", err);
  }
};

export const saveValue = async (path, value) => {
  try {
    await set(ref(database, path), value);
  } catch (err) {
    console.error("Error saving data:", err);
  }
};

export const listen = (path, callback) =>
  onValue(ref(database, path), callback);

export const stopListen = (path, listener) =>
  off(ref(database, path), listener);
