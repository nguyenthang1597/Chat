import React, { Component } from 'react'
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import {connect} from 'react-redux'
import Message from '../Message'
class ChatContent extends Component {
  scrollToBottom = () => {
    if (typeof this.chatContent === 'undefined') return;
    let scrollHeight = this.chatContent.scrollHeight;
    const height = this.chatContent.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.chatContent.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }
  componentWillUpdate() {
    this.scrollToBottom();
  }
  render() {
    const { messages, me, receiver } = this.props;
    let listMessage = [];
    if(messages){
      listMessage = Object.keys(messages).map(item => messages[item]);
      listMessage = Object.keys(listMessage[0]).map(item => listMessage[0][item]);
    }
    
    return (
      <div className='chatContent' ref={e => {this.chatContent = e}}>
        {
          listMessage.map((item, index) => <Message key={index} message={item} me={me} other={receiver} />)
        }
      </div>
    )
  }
}

export default compose(
  firebaseConnect(props => {console.log(props); return [{ path: `messages/${props.roomId}/` }]}),
  connect(({ firebase }) => ({ messages: firebase.data.messages }))
)(ChatContent)