import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isEmpty } from 'react-redux-firebase';
import { connect } from 'react-redux';

const AuthenticateComponent = ({ component: Component, auth, ...rest }) => 
<Route {...rest} render={props => !isEmpty(auth) ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}/>


const mapAuthToProps = ({ firebase: { auth } }) => ({ auth });

export default connect(mapAuthToProps)(AuthenticateComponent);