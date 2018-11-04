import React from 'react';
import './Message.css'
import moment from 'moment'
export default ({ message, from, to }) => {
  return (
    <div style={{display: 'block'}}>
      {
        from.uid === message.from.uid ?
          <div className='message-data align-right'>
            <span class="message-data-time">{moment(message.time).format('HH:mm DD/MM/YYYY')}</span>
            <span class="message-data-name">{from.uid === message.from.uid ? from.displayName : to.name}</span>
          </div>
          :
          <div className='message-data align-left'>
            <span class="message-data-name">{from.uid === message.from.uid ? from.displayName : to.name}</span>
            <span class="message-data-time">{moment(message.time).format('HH:mm DD/MM/YYYY')}</span>
          </div>
      }
      {
        from.uid === message.from.uid ?
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