import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase'
import useronline from './useronline'
import chat from './chat'
export default combineReducers({
  firebase: firebaseReducer,
  useronline,
  chat
})