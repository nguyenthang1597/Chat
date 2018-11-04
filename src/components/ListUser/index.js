import React, { Component } from 'react'
import './ListUser.css'
import ItemList from '../../containers/ItemList'
export default class ListUser extends Component {
  render() {
    const {user} = this.props;
    let list = makeList(this.props.listStates, this.props.displayNames);
    return (
      <div className='listContainer'>

      <div className='username'>Chatting - {user.displayName? user.displayName : user.email.slice(0, user.email.indexOf('@'))}</div>

      <div className='searchContainer'>
        <input className='search'/>
        <i className='material-icons'>search</i>
      </div>
       {
         list.map(item => item.uid !== user.uid ? <ItemList name={item.name} state={item.state} photoURL={item.photoURL} uid={item.uid}/> : null)
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
