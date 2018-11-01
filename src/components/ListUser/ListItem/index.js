import React from 'react'
import './ListItem.css'
import defaultAvatar from '../../../images/defaultAvatar.jpg';
export default ({url, name}) => {
  return(
    <div className='itemContainer'>
      <div className='itemImage'>
        <img src={defaultAvatar} className='listItemImg'/>
      </div>
      <div className='displayName'>{name}</div>
    </div>
  )
}

