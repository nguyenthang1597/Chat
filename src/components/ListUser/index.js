import React, { Component } from 'react'
import './ListUser.css'
import ListItem from './ListItem'
export default class ListUser extends Component {
  
  render() {
    let list = makeList(this.props.listStates, this.props.displayNames);
    return (
      <div className='listContainer'>
       {
         list.map(item => item.uid !== this.props.user ? <ListItem name={item.name} state={item.state} photoURL={item.photoURL}/> : null)
       }
      </div>
    )
  }
}

const makeList = (states, displayNames) => {
  let list = [];
  displayNames.forEach(name => {
    list.push({name: name.displayName, state: null, uid:name.uid, photoURL: name.photoURL})
  })
  list.forEach(item => {
    let _item = states.find(state => item.uid === state.uid);
    item.state = _item.state;
  })
  return list;
}
