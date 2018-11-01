import React, { Component } from 'react'
import './ListUser.css'
import ListItem from './ListItem'
export default class ListUser extends Component {
  render() {
    console.log(this.props.list)
    return (
      <div className='listContainer'>
        {
          this.props.list.map(item => <ListItem name={item.displayName ? item.displayName : item.email.slice(0, item.email.indexOf('@'))}/>)
        }
      </div>
    )
  }
}
