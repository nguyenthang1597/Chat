import config from '../../config/firebase'
import { updateUserState, updateDisplayName } from '../../actions/useronline';

const db = config.database();

export const watchStatusChange = (store) => {
  db.refFromURL('https://reactchat-6d913.firebaseio.com/presence/').on('value', snapshot => {
    if(snapshot.val()){
      snapshot.forEach(item => {
        store.dispatch(updateUserState({uid: item.key, state: item.val()}))
      })
    }
  })
}

export const watchDisplayNameChange = (store) => {
  db.refFromURL('https://reactchat-6d913.firebaseio.com/users/').on('value', snapshot => {
    if(snapshot.val()){
      snapshot.forEach(item => {
        store.dispatch(updateDisplayName({uid: item.key, displayName: item.val().displayName, photoURL: item.val().photoURL}))
      })
    }
  })
}

