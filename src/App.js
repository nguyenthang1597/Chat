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

const LoginPage = asyncComponent(() => import("./containers/LoginPage"));
const Home = asyncComponent(() => import("./components/Home"));


const logger = createLogger();
const store = createStore(reducers, applyMiddleware(logger));



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
