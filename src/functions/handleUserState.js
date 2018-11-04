import firebase from 'firebase'
export default () => {
  firebase.auth().onAuthStateChanged(user => {
    const db = firebase.database();
    var amOnline = db.refFromURL('https://reactchat-6d913.firebaseio.com/.info/connected');
    var userRef = db.refFromURL('https://reactchat-6d913.firebaseio.com/presence/' + user.uid);
    
    amOnline.on('value', function (snapshot) {
      if (snapshot.val()) {
        userRef.onDisconnect().set({uid: user.uid, time: firebase.database.ServerValue.TIMESTAMP, online: false});
        userRef.set({uid: user.uid, time: firebase.database.ServerValue.TIMESTAMP, online: true});
      }
    });

    if(user){
      console.log('USER ID', user.uid)
      db.refFromURL(`https://reactchat-6d913.firebaseio.com/users/${user.uid}/`).set({uid: user.uid, displayName: user.displayName ? user.displayName : user.email.slice(0, user.email.indexOf('@')), photoURL: user.photoURL, email: user.email})
    }
  })
}