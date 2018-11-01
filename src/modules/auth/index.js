import firebaseApp from '../../config/firebase';
import firebase from 'firebase'
const auth = firebaseApp.auth();
var provider = new firebase.auth.GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
export const login = (email, password) => auth.signInWithEmailAndPassword(email, password);

export const loginWithGoogle = () => auth.signInWithPopup(provider);
