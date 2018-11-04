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

    default: return state;
  }
}

export default chat;