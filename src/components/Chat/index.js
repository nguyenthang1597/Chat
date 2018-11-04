import React, { Component, Fragment } from 'react'
import './Chat.css'
<<<<<<< HEAD
import firebase from 'firebase'
import Message from '../Message'
import { saveMessage } from '../../modules/message'
=======
import Message from '../Message'
import defaultAvatar from '../../images/defaultAvatar.jpg'
import firebase from 'firebase'
>>>>>>> chỉnh sửa chat, thêm tiềm kiếm tên, thay đổi cấu trúc project
export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
<<<<<<< HEAD
      uidFrom: props.from.uid,
      uidTo: null
=======
      from: null,
      to: null
>>>>>>> chỉnh sửa chat, thêm tiềm kiếm tên, thay đổi cấu trúc project
    }
  }

  handleMessage = (e) => this.setState({ message: e.target.value })

  handleSubmit = () => {
    if (this.state.message === '')
      return;
<<<<<<< HEAD
    let _message = {
      from: this.props.from,
      to: this.props.receiver,
      content: this.state.message,
      time: firebase.database.ServerValue.TIMESTAMP
    }
    saveMessage(_message);
    this.setState({ message: '' })
    this.props.refressMessage(this.props.from.uid, this.props.receiver.uid)
  }

  componentWillReceiveProps(newProps) {
    if (newProps.receiver && newProps.receiver.uid !== this.state.uidTo) {
      this.props.watchMessages(this.props.from.uid, newProps.receiver.uid);
      this.setState({ uidTo: newProps.receiver.uid })
=======
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
>>>>>>> chỉnh sửa chat, thêm tiềm kiếm tên, thay đổi cấu trúc project
    }
  }

  scrollToBottom = () => {
<<<<<<< HEAD
=======
    if(typeof this.chatContent === 'undefined') return;
>>>>>>> chỉnh sửa chat, thêm tiềm kiếm tên, thay đổi cấu trúc project
    let scrollHeight = this.chatContent.scrollHeight;
    const height = this.chatContent.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.chatContent.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
<<<<<<< HEAD
    const { listMessage, receiver } = this.props;
    return (
      <div className='chatContainer'>
        <div className='chatHead'>
          {
            receiver &&
            <Fragment>
              <div style={{marginLeft: 10, marginRight: 10, backgroundImage: `url('${receiver.imgUrl}')`, width: 60, height: 60, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '50%', border: '2px solid white' }}></div>
              <span>Chat with <span style={{fontWeight: 500, fontSize: 20}}>{receiver.name}</span></span>
              <i style={{left: '95%', cursor: 'pointer', fontSize: 30}} className='material-icons'>star_border</i>
            </Fragment>
          }
        </div>
        <div className='chatContent' ref={e => { this.chatContent = e }}>
          {
            listMessage.map(item => <Message message={item} from={this.props.from} to={receiver} />)
          }
        </div>
        <div className='inputbox'>
          <input className='messageinput' name='message' onChange={this.handleMessage} value={this.state.message} />
          <button onClick={this.handleSubmit}>Send</button>
        </div>
      </div>
    )
  }
}
=======
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
>>>>>>> chỉnh sửa chat, thêm tiềm kiếm tên, thay đổi cấu trúc project
