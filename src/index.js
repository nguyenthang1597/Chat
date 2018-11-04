import React from 'react';
import {render} from 'react-dom';
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


