import React from 'react';
import './Message.css'
import moment from 'moment'
export default ({ message, user, other }) => {
  console.log(user, other)
  return (
    <div style={{display: 'block'}}>
      {
        user.uid === message.from ?
          <div className='message-data align-right'>
            <span class="message-data-time">{moment(message.time).format('HH:mm DD/MM/YYYY')}</span>
            <span class="message-data-name">{user.displayName}</span>
          </div>
          :
          <div className='message-data align-left'>
            <span class="message-data-name">{other.displayName}</span>
            <span class="message-data-time">{moment(message.time).format('HH:mm DD/MM/YYYY')}</span>
          </div>
      }
      {
        user.uid === message.from ?
          <div className='messageContent myMessage float-right align-right'>
            {message.content}
          </div> :
          <div className='messageContent ortherMessage'>
            {message.content}
          </div>
      }
    </div>
  )
}