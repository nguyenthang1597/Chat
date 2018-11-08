import React from 'react';
import './Message.css'
import moment from 'moment'
import isImageUrl from 'is-image-url'
export default ({ message, me, other }) => {
  return (
    <div style={{display: 'block'}}>
      {
        me.uid === message.from ?
          <div className='message-data align-right'>
            <span className="message-data-time">{moment(message.time).format('HH:mm DD/MM/YYYY')}</span>
            <span className="message-data-name">{me.displayName}</span>
          </div>
          :
          <div className='message-data align-left'>
            <span className="message-data-name">{other.name}</span>
            <span className="message-data-time">{moment(message.time).format('HH:mm DD/MM/YYYY')}</span>
          </div>
      }
      {
        me.uid === message.from ?
          <div className='messageContent myMessage float-right align-right'>
            {isImageUrl(message.content) ? <img style={{width: 100, height: 100}} src={message.content}/> : message.content}
          </div> :
          <div className='messageContent ortherMessage'>
            {isImageUrl(message.content) ? <img style={{width: 100, height: 100}} src={message.content}/> : message.content}
          </div>
      }
    </div>
  )
}