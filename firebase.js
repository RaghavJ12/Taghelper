import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZto-Vk-6ikN_PsMeRvocc0SqBnVAdpgk",
    authDomain: "taghelper-54703.firebaseapp.com",
    databaseURL: "https://taghelper-54703-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "taghelper-54703",
    storageBucket: "taghelper-54703.appspot.com",
    messagingSenderId: "818264592165",
    appId: "1:818264592165:web:d1d51e59db16675e1054cc",
    measurementId: "G-Z8ZCLFK3E5"
  };

  const app= !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

  const db=app.firestore();
  const auth=app.auth();
  const provider= new firebase.auth.FacebookAuthProvider();
  // const provider= new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };