import React, { Component } from 'react'
import { compose } from 'redux';
import { firebaseConnect } from 'react-redux-firebase';
import {connect} from 'react-redux'
import Message from '../Message'
import { createIdRoom } from '../../functions';
class ChatContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listMessage: [],
    }
  }
  
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

  componentWillReceiveProps(newProps){
    let roomId = createIdRoom(newProps.me.uid, newProps.receiver.uid);
    let listMessage = [];
    if(newProps.messages[roomId]){
      listMessage = Object.keys(newProps.messages[roomId]).map(item => newProps.messages[roomId][item]);
      this.setState({listMessage})        
      
    }
  }

  render() {
    const { messages, me, receiver } = this.props;
    return (
      <div className='chatContent' ref={e => {this.chatContent = e}}>
        {
          this.state.listMessage.map((item, index) => <Message key={index} message={item} me={me} other={receiver} />)
        }
      </div>
    )
  }
}

export default compose(
  firebaseConnect(props => [{ path: `messages/${createIdRoom(props.me.uid, props.receiver.uid)}/` }]),
  connect(({ firebase }) => ({ messages: firebase.data.messages }))
)(ChatContent)