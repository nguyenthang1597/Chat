import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './ListItem.css'
import defaultAvatar from '../../../images/defaultAvatar.jpg'

export default ({name, state, photoURL}) => {
  return(
    <div className='itemContainer'>
      <div className='itemImage'>
        <img className='listItemImg' src={photoURL ? photoURL : defaultAvatar}/>
      </div>
      <div>{name}</div>
      {state===true && <div className='active'></div>}
    </div>
  )
}




