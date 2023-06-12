
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
import { getFirestore} from "https://www.gstatic.com/firebasejs/9.0.2/firebase-firestore.js";
const  firebaseConfig = {
    apiKey: "AIzaSyDwEgxrgaileQSnclPFOXFCghS4wJjBEQk",
    authDomain: "food-ordering-app-3932e.firebaseapp.com",
    databaseURL: "http://food-ordering-app-3932e-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "food-ordering-app-3932e",
    storageBucket: "food-ordering-app-3932e.appspot.com",
    messagingSenderId: "98716952915",
    appId: "1:98716952915:web:891e4c4c8d4262199fd9a6",
    measurementId: "G-SNZJVTEMJ7"};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};


// import { getFirestore, collection, getDocs } from 'firebase/firestore';

// Assuming you have already initialized Firebase app and obtained the Firestore instance as 'db'

// Retrieve data from the 'menuItems' collection
