import React, { Component, Fragment } from 'react'
import LeftBar from './LeftBar';
import ListUser from './ListUser';
import Chat from './Chat';

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <LeftBar/>
        <ListUser/>
        <Chat/>
      </Fragment>
    )
  }
}
