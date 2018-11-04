import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import {render} from 'react-dom';
import App from './App';


render(<App/>, document.getElementById('root'));
=======
import ReactDOM from 'react-dom';
import './index.css';
=======
import {render} from 'react-dom';
>>>>>>> chỉnh sửa chat, thêm tiềm kiếm tên, thay đổi cấu trúc project
import App from './App';
import { compose, createStore, applyMiddleware } from 'redux'
import {Provider} from 'react-redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import firebase from 'firebase'
import {createLogger} from 'redux-logger'

import './config/firebase';
import reducers from './reducers'

const config = {
  userProfile: 'users'
}

const logger = createLogger();
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, config),applyMiddleware(logger)
)(createStore)

const store = createStoreWithFirebase(reducers);



render(<Provider store={store}><App/></Provider>, document.getElementById('root'));


<<<<<<< HEAD
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
>>>>>>> Initial commit from Create React App
=======
>>>>>>> chỉnh sửa chat, thêm tiềm kiếm tên, thay đổi cấu trúc project
