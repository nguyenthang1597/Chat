window.onbeforeunload = function(){
  alert('quit')
  return confirm('Do you wan to quit?')
}
var config = {
  apiKey: "AIzaSyDLNOkpOQfGNKnrLIwwYK3pwWRIQRKtScY",
  authDomain: "reactchat-6d913.firebaseapp.com",
  databaseURL: "https://reactchat-6d913.firebaseio.com",
  projectId: "reactchat-6d913",
  storageBucket: "reactchat-6d913.appspot.com",
  messagingSenderId: "1090452660880"
};
firebase.initializeApp(config);