
// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-app.js";
import { getDatabase, ref, set, get, update } from "https://www.gstatic.com/firebasejs/9.22.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyD_YUNLNPu4geVJycBr0SSFTtDn1GMT_zQ",
  authDomain: "surabayatergacor.firebaseapp.com",
  databaseURL: "https://surabayatergacor-default-rtdb.firebaseio.com",
  projectId: "surabayatergacor",
  storageBucket: "surabayatergacor.appspot.com",
  messagingSenderId: "662849503648",
  appId: "1:662849503648:web:6d7e8264c50584037f24c5",
  measurementId: "G-YLNS92LK17"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, ref, set, get, update };
