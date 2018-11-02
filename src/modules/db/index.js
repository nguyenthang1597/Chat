import firebaseApp from '../../config/firebase';
const db = firebaseApp.database();

export const checkIn = (user, cb) => {
  var userRef = db.ref("userlogin/");
  const data = {
    [user.uid]: {
      uid: user.uid,
      displayName: user.displayName,
      loginAt: new Date().toString(),
      isLogin: true,
      logoutAt: '',
      email: user.email,
      photoURL: user.photoURL
    }
  }
  userRef.update(data);
}

export const checkOut = (user) => {
  var userRef = db.ref("userlogin/");
  const data = {
    [user.uid]: {
      uid: user.uid,
      displayName: user.displayName,
      loginAt: '',
      isLogin: false,
      logoutAt: new Date().toString(),
      email: user.email,
      photoURL: user.photoURL
    }
  }
  userRef.update(data);
}