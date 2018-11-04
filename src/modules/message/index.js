import config from '../../config/firebase'
import { addNewMessage, filterByUid } from '../../actions/chat';
const db = config.database();

export const saveMessage = message => {
  db.refFromURL('https://reactchat-6d913.firebaseio.com/messages').push(message);
}

export const watchMessage = (dispatch, from, to) => {
  db.refFromURL('https://reactchat-6d913.firebaseio.com/messages').on('value', snapshot => {
    let list = [];
    if(snapshot.val()){
      snapshot.forEach(item => {
        if(item.val().from === from || item.val().to.uid === from || item.val().from === to || item.val().to.uid === to){
          list.push(item.val())
        }
      })
      dispatch(addNewMessage(list));
      dispatch(filterByUid(from, to));
    }
  })
}