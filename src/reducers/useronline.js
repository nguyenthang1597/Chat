import { ADD_USER } from '../actions/useronline';

const initState = {
  list: []
};

const useronline = (state = initState, action) => {
  switch (action.type) {
    case ADD_USER:
      let user = state.list.find(item => item.uid === action.user.uid)
      if (!user)
        return Object.assign({}, state, {
          list: state.list.concat(action.user),
        })
      else {
        return Object.assign({}, state, {
          list: state.list.map(item => item.uid === action.user.uid ? action.user : item)
        })
      }
    default:
      return state;
  }
}


export default useronline;
