<<<<<<< HEAD
import {ADD_NEW_MESSAGE, FILTER_BY_UID, RECEIVER} from '../actions/chat';

const initState = {
  messages: [],
  receiver: null,
  filterlist: [],
  receiverUrl: null
}

const chat = (state = initState, action) => {
  switch(action.type){
    case ADD_NEW_MESSAGE: {
      return Object.assign({}, state, {
        messages: action.messages
      })
    }
    case RECEIVER:
      return Object.assign({}, state, {
        receiver: action.user,
      })
    case FILTER_BY_UID:
      return Object.assign({}, state,{
        filterlist: state.messages.filter(item => item.to.uid === action.to || item.from.uid === action.from || item.to.uid === action.from || item.from.uid === action.to)
      })

=======
import { ADD_USER_CHAT } from '../actions';

const init = {
  from: null,
  to: null
}

const chat = (state = init, action) => {
  switch (action.type) {
    case ADD_USER_CHAT:
      return Object.assign({}, state, {
        from: action.from, to: action.to
      })
>>>>>>> chỉnh sửa chat, thêm tiềm kiếm tên, thay đổi cấu trúc project
    default: return state;
  }
}

export default chat;