  //require("firebase/firestore")
  import firebase from 'firebase'
  
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCa3SLfN6Ydiv3Jev0Q3iVdDm-PAbVaWrM",
    authDomain: "react-blog-76830.firebaseapp.com",
    databaseURL: "https://react-blog-76830.firebaseio.com",
    projectId: "react-blog-76830",
    storageBucket: "react-blog-76830.appspot.com",
    messagingSenderId: "555841278990",
    appId: "1:555841278990:web:2014a6e60b8f2f5dfed85f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore
  export default firebase.firestore();