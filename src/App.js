import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Switch } from "react-router-dom";
import { createStore, compose } from "redux";
import { Provider } from "react-redux";
import firebase from 'firebase'
import { reactReduxFirebase } from 'react-redux-firebase'
import asyncComponent from "./components/asyncComponent";
import AuthenticateComponent from "./containers/AuthenticateComponent";
import UnauthenticateComponent from "./containers/UnauthenticateComponent";
import reducers from "./reducers";
import config from './config/firebase'


import { checkOnlineStatus } from "./modules/auth";
import { watchStatusChange, watchDisplayNameChange } from "./modules/useronline";


const LoginPage = asyncComponent(() => import("./components/LoginPage"));
const Home = asyncComponent(() => import("./components/Home"));

const rrfConfig = {
  userProfile: 'users'
}
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig)
)(createStore)




const store = createStoreWithFirebase(reducers)

checkOnlineStatus();

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
