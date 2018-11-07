import React, { Component, Fragment } from 'react'
import LeftBar from './LeftBar';
import ListUser from './ListUser';
import Chat from './Chat';

export default class Home extends Component {
  state = {
    receiver: null
  }

  setReceiver = user => this.setState({receiver: user});

  render() {
    return (
      <Fragment>
        <LeftBar/>
        <ListUser setReceiver={this.setReceiver}/>
        <Chat receiver={this.state.receiver}/>
      </Fragment>
    )
  }
}
