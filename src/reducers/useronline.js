import {USER_LOGIN, USER_LOGOUT} from '../actions/useronline';


const initState = {
  list: [],
  count: 0
};


const useronline = (state = initState, action) => {
  console.log(action.user)
  switch(action.type){
    case USER_LOGIN: 
      return Object.assign({}, state, {
        list: state.list.concat(action.user),
        count: state.count+1
      })
    case USER_LOGOUT:
      return Object.assign({}, state, {
        list: state.list.filter(item => item.uid != action.uid),
        count: state.count-1
      })
    default:
      return state;
  }
}


export default useronline;
