import React, { Component, Fragment } from 'react'
import TopBar from '../../containers/TopBar';
import ListUser from '../../containers/ListUser'
export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <TopBar/>
        <ListUser/>
      </Fragment>
    )
  }
}
