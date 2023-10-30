import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/database"

const firebaseConfig = {
  apiKey: "AIzaSyBUnrjBsjXX0af_Tmbb1ZMT4ZqrOJtLccs",
  authDomain: "flexxit-68d31.firebaseapp.com",
  projectId: "flexxit-68d31",
  storageBucket: "flexxit-68d31.appspot.com",
  messagingSenderId: "443860961642",
  appId: "1:443860961642:web:a96cbe8b32cd2ff1d8bd13"
};

if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export default firebase;