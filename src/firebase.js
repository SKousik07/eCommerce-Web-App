import firebase from "firebase";

const firebaseApp= firebase.initializeApp(
   {
    apiKey: "AIzaSyAmzShG0gEyn1n-pive28FGG8ftxYoN87Q",
    authDomain: "shopping-zone-24a43.firebaseapp.com",
    databaseURL: "https://shopping-zone-24a43.firebaseio.com",
    projectId: "shopping-zone-24a43",
    storageBucket: "shopping-zone-24a43.appspot.com",
    messagingSenderId: "105242345795",
    appId: "1:105242345795:web:40bef39a1f210300786ff6",
    measurementId: "G-94K23119E5"
      }
);

const db= firebaseApp.firestore();
export const auth= firebaseApp.auth();
export default db;