import React from 'react'
import {Route, Redirect} from 'react-router-dom'
import {isEmpty} from 'react-redux-firebase'

export default ({component: Component, auth, profile, ...rest,}) => {
  console.log(isEmpty(auth))
  return <Route {...rest}  render={props => {
    return !isEmpty(auth) ? <Redirect to={{pathname: props.location.state.from.pathname, state: {from: '/login'}}}/> : <Component {...props}/>
  }}/>
}
