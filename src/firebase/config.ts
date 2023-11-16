import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA84vCAMqlwljxDMwi8q6FzHuvmwwH2i0I",
  authDomain: "music-player-vue-firebase.firebaseapp.com",
  projectId: "music-player-vue-firebase",
  storageBucket: "music-player-vue-firebase.appspot.com",
  messagingSenderId: "290951237026",
  appId: "1:290951237026:web:cf0f15ef217a450277f6fb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
