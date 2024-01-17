import firebase from "firebase/app"
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDCJ0GRS2RMEu8XQS4W2WPuq03VS5221xw",
    authDomain: "pregnancy-diet-af415.firebaseapp.com",
    projectId: "pregnancy-diet-af415",
    storageBucket: "pregnancy-diet-af415.appspot.com",
    messagingSenderId: "66696993184",
    appId: "1:66696993184:web:2418c46e0b198907c52cc5"
  };

  //   počáteční inicializace
firebase.initializeApp(firebaseConfig)

// počáteční inicializace služeb
const projectFirestore = firebase.firestore()

export default projectFirestore 