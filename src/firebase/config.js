import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAMEMgqPdwILslKOEQM1si6oxZ_9b1n7X8",
    authDomain: "faizan-firegram.firebaseapp.com",
    projectId: "faizan-firegram",
    storageBucket: "faizan-firegram.appspot.com",
    messagingSenderId: "82754085863",
    appId: "1:82754085863:web:6e62cde6296d3335d3d342"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;

  export { projectStorage, projectFirestore, timestamp};