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
    const {star, users, auth} = this.props;
    let list = [];
    if(users && star) {
      list =  Object.keys(users).map(item => users[item])
      list = list.filter(item => item.uid !== auth.uid)
      list = list.map(item => ({...item, star: star[item.uid]}))
      list = list.sort((a,b) => compare(a,b, auth.uid))
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
          list && (filterList(list, this.state.text)).map((item, index) => item.uid !== auth.uid ? <ItemList key={index} item={item } setReceiver={this.props.setReceiver} me={auth.uid} /> : null)
        }
        </div>
      )
    else return null;
  }
}

const compare = (a,b, me) => {
  
  if(a.star && b.star){
    console.log("a", a.star[me])
    console.log("b", b.star[me])
    if(a.star[me] && !b.star[me]) return -1;
    if(!a.star[me] && b.star[me]) return 1;
  }
  if(a.star && !b.star){
    if(a.star[me]) return -1;
  }
  if(!a.star && b.star){
    if(b.star[me]) return 1;
  }
  if(a.online && b.online){
    if(a.displayName < b.displayName) return -1;
    if(a.displayName === b.displayName) return 0;
    if(a.displayName < b.displayName) return 1;
  }
  if(a.online && !b.online) return -1;
  if(!a.online && b.online) return 1;
  if(!a.online && !b.online){
    if(a.time > b.time) return -1;
    if(a.time < b.time) return 1;
  }

  return 0;
}


const filterList = (list, text) => {
  return list.filter(item => {
    return item.displayName.includes(text)
  });
}