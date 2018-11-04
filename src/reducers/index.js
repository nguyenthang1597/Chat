import {combineReducers} from 'redux';
import {firebaseReducer} from 'react-redux-firebase'
<<<<<<< HEAD
import useronline from './useronline'
import chat from './chat'
export default combineReducers({
  firebase: firebaseReducer,
  useronline,
=======

import chat from './chat'
export default combineReducers({
  firebase: firebaseReducer,
>>>>>>> chỉnh sửa chat, thêm tiềm kiếm tên, thay đổi cấu trúc project
  chat
})