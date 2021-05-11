import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC8Pr4QCg-7HFQYOxyvLEtM58Q33wNM76Q",
    authDomain: "cs278-potpourri.firebaseapp.com",
    databaseURL: "https://cs278-potpourri-default-rtdb.firebaseio.com",
    projectId: "cs278-potpourri",
    storageBucket: "cs278-potpourri.appspot.com",
    messagingSenderId: "232453663675",
    appId: "1:232453663675:web:5487c09b83b26692b4b29e",
    measurementId: "G-NCF94M8783"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;