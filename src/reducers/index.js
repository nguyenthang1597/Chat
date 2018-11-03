import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase'
import useronline from './useronline'
export default combineReducers({
  firebase: firebaseReducer,
  useronline
})