import React, { Component, Fragment } from 'react'
import './Chat.css'
import firebase from 'firebase'
import Message from '../Message'
import { saveMessage } from '../../modules/message'
export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      uidFrom: props.from.uid,
      uidTo: null
    }
  }

  handleMessage = (e) => this.setState({ message: e.target.value })

  handleSubmit = () => {
    if (this.state.message === '')
      return;
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
    }
  }

  scrollToBottom = () => {
    let scrollHeight = this.chatContent.scrollHeight;
    const height = this.chatContent.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.chatContent.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
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
