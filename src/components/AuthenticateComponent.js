import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { isEmpty } from 'react-redux-firebase';

export default ({ User, component: Component, auth, profile, ...rest }) => {
  return <Route {...rest} render={props =>
    !isEmpty(auth) ? <Component {...props} /> : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
  }
  />
}
