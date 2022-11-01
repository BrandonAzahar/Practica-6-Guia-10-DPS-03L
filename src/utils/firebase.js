// Import the functions you need from the SDKs you need
import  firebase  from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsnTuTA5U53Kj9OqykLugRF8QEp8Vzdi4",
  authDomain: "birthday-e6e8e.firebaseapp.com",
  databaseURL: "https://birthday-e6e8e-default-rtdb.firebaseio.com",
  projectId: "birthday-e6e8e",
  storageBucket: "birthday-e6e8e.appspot.com",
  messagingSenderId: "893440871777",
  appId: "1:893440871777:web:7e5a4acb3dd0cc4d924920"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}


// Initialize Firebase
export default firebase;