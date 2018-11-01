import { SET_AUTH } from '../actions/auth';

const initState = {
  user: null
}

const auth = (state = initState, action) => {
  switch (action.type) {
    case SET_AUTH:
      if (action.user !== state.user)
        return Object.assign({}, { user: action.user, token: action.token });
    default: return state;
  }
}

export default auth;