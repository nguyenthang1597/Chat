import React from 'react';
import {render} from 'react-dom';
import App from './App';
import { compose, createStore } from 'redux'
import {Provider} from 'react-redux'
import { reactReduxFirebase } from 'react-redux-firebase'
import firebase from 'firebase'
// import {createLogger} from 'redux-logger'

import './config/firebase';
import reducers from './reducers'

const config = {
  userProfile: 'users'
}

// const logger = createLogger();
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, config)
)(createStore)

const store = createStoreWithFirebase(reducers);



render(<Provider store={store}><App/></Provider>, document.getElementById('root'));


