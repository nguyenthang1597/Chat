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
import { setUser } from "./actions/auth";
import { checkIn, checkOut } from './modules/db/index'
import firebaseApp from './config/firebase'
import { addUser } from "./actions/useronline";

const LoginPage = asyncComponent(() => import("./containers/LoginPage"));
const Home = asyncComponent(() => import("./components/Home"));

const auth = firebaseApp.auth();
const db = firebaseApp.database().ref("userlogin/");
const logger = createLogger();
const store = createStore(reducers, applyMiddleware(logger));

auth.onAuthStateChanged(user => {
  if(user){
    checkIn(user);
    store.dispatch(setUser(null, user));
  }
});

db.on("value", function(data){
  data.forEach(item => {
    store.dispatch(addUser(item.val()))
  })
})


export default class App extends Component {
  onUnload = (e) => {
    checkOut(store.getState().auth.user)
  }

  componentDidMount(){
    window.addEventListener('beforeunload', this.onUnload);
  }
  componentWillUnmount(){
    window.removeEventListener('beforeunload', this.onUnload);
  }
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
