import {combineReducers} from 'redux';
import auth from './auth';
import useronline from './useronline';
export default combineReducers({
  auth,
  useronline
})