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
    default: return state;
  }
}

export default chat;