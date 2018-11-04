import React, { Component, Fragment } from 'react'
import './Chat.css'
import Message from '../Message'
import defaultAvatar from '../../images/defaultAvatar.jpg'
import firebase from 'firebase'
export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      from: null,
      to: null
    }
  }

  handleMessage = (e) => this.setState({ message: e.target.value })

  handleSubmit = () => {
    if (this.state.message === '')
      return;
    const {firebase, from, to} = this.props;
    let _message = {
      from: from,
      to: to,
      content: this.state.message,
      time: firebase.database.ServerValue.TIMESTAMP
    }
    firebase.push('messages', _message);
    this.setState({ message: '' })
  }

  componentWillReceiveProps(newProps) {
    if(newProps.from !== this.state.from || newProps.to !== this.state.to){
      this.setState({
        from: newProps.from,
        to: newProps.to
      })
    }
  }

  scrollToBottom = () => {
    if(typeof this.chatContent === 'undefined') return;
    let scrollHeight = this.chatContent.scrollHeight;
    const height = this.chatContent.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.chatContent.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    const { from, to, users, messages } = this.props;
    let listMessage = [];
    if(messages){
      listMessage = Object.keys(messages).map(item => messages[item]);
      listMessage = listMessage.filter(item => item.from === from && item.to === to || item.to === from && item.from === to);
    }
    if(users){
      console.log('from: ', from)
      console.log('users: ', users)
      return (
        <div className='chatContainer'>
          <div className='chatHead'>
            {
              to &&
              <Fragment>
                <div style={{marginLeft: 10, marginRight: 10, backgroundImage: `url('${users[to].photoURL ? users[to].photoURL : defaultAvatar}')`, width: 60, height: 60, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '50%', border: '2px solid white' }}></div>
                <span>Chat with <span style={{fontWeight: 500, fontSize: 20}}>{users[to].displayName}</span></span>
                <i style={{left: '95%', cursor: 'pointer', fontSize: 30}} className='material-icons'>star_border</i>
              </Fragment>
            }
          </div>
          <div className='chatContent' ref={e => { this.chatContent = e }}>
            {
              listMessage.map(item => <Message message={item} user={users[this.state.from]} other={users[this.state.to]}/>)
            }
          </div>
          <div className='inputbox'>
            <textarea className='messageinput' name='message' onChange={this.handleMessage} value={this.state.message} />
            <div className='control'>
              <i className='material-icons addpicture'>insert_photo</i>
              <div className='send' onClick={this.handleSubmit}>Send</div>
            </div>
          </div>
        </div>
      )
    }
    return null;
  }
}