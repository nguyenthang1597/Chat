<<<<<<< HEAD
import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import { createStore, compose, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import firebase from 'firebase'
import { reactReduxFirebase } from 'react-redux-firebase'
import asyncComponent from "./components/asyncComponent";
import AuthenticateComponent from "./containers/AuthenticateComponent";
import UnauthenticateComponent from "./containers/UnauthenticateComponent";
import reducers from "./reducers";
import {createLogger} from 'redux-logger'
import config from './config/firebase'


import { checkOnlineStatus } from "./modules/auth";
import { watchStatusChange, watchDisplayNameChange } from "./modules/useronline";

const logger = createLogger();
const LoginPage = asyncComponent(() => import("./components/LoginPage"));
const Home = asyncComponent(() => import("./components/Home"));

const rrfConfig = {
  userProfile: 'users'
}
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig), applyMiddleware(logger)
)(createStore)




const store = createStoreWithFirebase(reducers)

checkOnlineStatus(store);

watchStatusChange(store);
watchDisplayNameChange(store);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <AuthenticateComponent path="/" exact={true} component={Home} />
            <UnauthenticateComponent path="/login" exact={true} component={LoginPage} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}
=======
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
>>>>>>> Initial commit from Create React App
