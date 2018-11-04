import React from 'react';
import './Message.css'
import moment from 'moment'
<<<<<<< HEAD
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
=======
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
>>>>>>> chỉnh sửa chat, thêm tiềm kiếm tên, thay đổi cấu trúc project
            <span class="message-data-time">{moment(message.time).format('HH:mm DD/MM/YYYY')}</span>
          </div>
      }
      {
<<<<<<< HEAD
        from.uid === message.from.uid ?
=======
        user.uid === message.from ?
>>>>>>> chỉnh sửa chat, thêm tiềm kiếm tên, thay đổi cấu trúc project
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