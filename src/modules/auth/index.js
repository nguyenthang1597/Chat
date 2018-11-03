import firebase from 'firebase'
import config from '../../config/firebase'

const auth = config.auth();
const db = config.database();
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
export const login = (email, password) => auth.signInWithEmailAndPassword(email, password);

export const loginWithGoogle = () => auth.signInWithPopup(provider);

export const checkOnlineStatus = () => {
  auth.onAuthStateChanged(user => {
    var amOnline = db.refFromURL('https://reactchat-6d913.firebaseio.com/.info/connected');
    var userRef = db.refFromURL('https://reactchat-6d913.firebaseio.com/presence/' + user.uid);
    
    amOnline.on('value', function (snapshot) {
      if (snapshot.val()) {
        userRef.onDisconnect().set(new Date().toString());
        userRef.set(true);
      }
    });

    if(user){
      db.refFromURL(`https://reactchat-6d913.firebaseio.com/users/${user.uid}/`).set({displayName: user.displayName ? user.displayName : user.email.slice(0, user.email.indexOf('@')), photoURL: user.photoURL})
    }
  })
 
}
