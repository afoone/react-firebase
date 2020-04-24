  //require("firebase/firestore")
  import firebase from 'firebase'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "",
    authDomain: "react-blog-76830.firebaseapp.com",
    databaseURL: "https://react-blog-76830.firebaseio.com",
    projectId: "react-blog-76830",
    storageBucket: "react-blog-76830.appspot.com",
    messagingSenderId: "555841278990",
    appId: ""
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore
  export default firebase.firestore();