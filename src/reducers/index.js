import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase'

import chat from './chat'
export default combineReducers({
  firebase: firebaseReducer,
  chat
})