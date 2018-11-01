import React from 'react'
import './ListItem.css'
import defaultAvatar from '../../../images/defaultAvatar.jpg';
export default ({url, name, active}) => {
  let img = url !== '' ? url : defaultAvatar;
  return(
    <div className='itemContainer'>
      <div className='itemImage'>
        <img src={img} className='listItemImg'/>
      </div>
      <div className='displayName'>{name}</div>
      {active && <div className='active'></div>}
    </div>
  )
}

