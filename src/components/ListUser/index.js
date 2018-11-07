import React, { Component } from 'react'
import './ListUser.css'
import { isLoaded } from 'react-redux-firebase';
import ItemList from '../ItemList'
export default class ListUser extends Component {

  state = {
    text: ''
  }

  handleTextChange = e => {
    this.setState({text: e.target.value})
  } 

  render() {
    const {users, auth} = this.props;
    let list = null;
    if(users) {
      list =  Object.keys(users).map(item => users[item])
      list = list.sort((a,b) => a.time < b.time ? 1 : a.time === b.time ? 0 : -1)
    }
    if(isLoaded(auth))
      return (
        <div className='listContainer'>

        <div className='username'>Chatting - {auth.displayName? auth.displayName : auth.email.slice(0, auth.email.indexOf('@'))}</div>

        <div className='searchContainer'>
          <input className='search' onChange={this.handleTextChange}/>
          <i className='material-icons'>search</i>
        </div>
        {
          list && (filterList(list, this.state.text)).map((item, index) => item.uid !== auth.uid ? <ItemList key={index} item={item } setReceiver={this.props.setReceiver}/> : null)
        }
        </div>
      )
    else return null;
  }
}


const filterList = (list, text) => {
  return list.filter(item => {
    return item.displayName.includes(text)
  });
}