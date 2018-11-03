import { UPDATE_DISPLAY_NAME, UPDATE_USER_STATE } from '../actions/useronline';

const initState = {
  states: [],
  displayNames: []
}


const useronline = (state = initState, action) => {
  switch (action.type) {
    case UPDATE_USER_STATE:
      {
        let item = state.states.find(item => item.uid === action.ob.uid);
        if (item) {
          return Object.assign({}, state, {
            states: state.states.map(_item => _item.uid === item.uid ? action.ob : _item)
          })
        }
        else
          return Object.assign({}, state, {
            states: [...state.states, action.ob]
          })
      }
    case UPDATE_DISPLAY_NAME: {
      let item = state.displayNames.find(item => item.displayName === action.ob.displayName);
      if (item) return state;
      else return Object.assign({}, state, { displayNames: [...state.displayNames, action.ob] })
    }
    default: return state;
  }
}

export default useronline;