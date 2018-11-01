import React, { Component } from 'react'
import './TopBar.css'
import defaultAvatar from '../../images/defaultAvatar.jpg';
export default class TopBar extends Component {
  render() {
    const {user} = this.props;
    let displayName = user.displayName || user.email.slice(0, user.email.indexOf('@'));
    let srcImg = user.photoURL ? user.photoURL : defaultAvatar;
    return (
      <div className='topbarContainer'>
        <div className='chatTitle'>Chat</div>
        <div className='info'>
        <div className='topbarName'>{displayName}</div>
          <div className='topbarAvatar'><img src={srcImg} alt='avatar' style={{width: 50, height: 50, borderRadius: 25}}/></div>
        </div>
      </div>
    )
  }
}
