import React, { Component } from 'react'
import {BrowserRouter, Switch} from 'react-router-dom'
import './App.css'
import {handleUserState} from './functions'
import AuthenticateComponent from './containers/AuthenticateComponent';
import UnauthenticateComponent from './containers/UnauthenticateComponent';
import asyncComponent from './containers/asyncComponent';

const LoginPage = asyncComponent(() => import('./containers/LoginPage'));
const Home = asyncComponent(() => import('./containers/Home'));

export default class App extends Component {
  componentDidMount(){
    handleUserState()
  }
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <AuthenticateComponent path="/" exact={true} component={Home} />
          <UnauthenticateComponent path="/login" exact={true} component={LoginPage} />
        </Switch>
      </BrowserRouter>
    )
  }
}
