import React, { Component } from "react";
import "./App.css";
import asyncComponent from "./components/asyncComponent";
import { BrowserRouter, Switch } from "react-router-dom";
import AuthenticateComponent from "./containers/AuthenticateComponent";
import UnauthenticateComponent from "./containers/UnauthenticateComponent";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { createLogger } from "redux-logger";
import firebaseApp from "./config/firebase";
import { setUser } from "./actions/auth";
import {checkIn} from './modules/db/index'
import { userLogin } from "./actions/useronline";
const LoginPage = asyncComponent(() => import("./containers/LoginPage"));
const Home = asyncComponent(() => import("./components/Home"));

const auth = firebaseApp.auth();
const db = firebaseApp.database().ref('userlogin');
const logger = createLogger();
const store = createStore(reducers, applyMiddleware(logger));

auth.onAuthStateChanged(user => {
  checkIn(user, err =>  console.log(err));
  store.dispatch(setUser(null, user));
});

db.on('value', data => {
  let val = data.val();
  let user = val[Object.keys(val)[0]];
  store.dispatch(userLogin(user));
})
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
