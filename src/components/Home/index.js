import React, { Component, Fragment } from 'react'
import TopBar from '../../containers/TopBar';
import ListUser from '../../containers/ListUser'
import Chat from '../../containers/Chat';
export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <TopBar/>
        <ListUser/>
        <Chat/>
      </Fragment>
    )
  }
}
