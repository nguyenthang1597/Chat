import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export default ({User, component: Component, ...rest}) => {
  return <Route {...rest}  render={props => {
    return User ? <Redirect to={{pathname: props.location.state.from.pathname, state: {from: '/login'}}}/> : <Component {...props}/>
  }}/>
}
