import firebase from 'firebase'
const config = {
  apiKey: "AIzaSyDLNOkpOQfGNKnrLIwwYK3pwWRIQRKtScY",
  authDomain: "reactchat-6d913.firebaseapp.com",
  databaseURL: "https://reactchat-6d913.firebaseio.com",
  projectId: "reactchat-6d913",
  storageBucket: "reactchat-6d913.appspot.com",
  messagingSenderId: "1090452660880"
};

export default firebase.initializeApp(config);
  