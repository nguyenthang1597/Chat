import firebaseApp from '../../config/firebase';
const db = firebaseApp.database();

export const checkIn = (user, cb) => {
  var playersRef = db.ref("userlogin/");
  const data = {
    [user.uid]: {
      uid: user.uid,
      displayName: user.displayName,
      loginAt: new Date().toString(),
      isLogin: true,
      logoutAt: '',
      email: user.email
    }
  }
  playersRef.set(data);
}