import React, { Component, Fragment } from 'react'
import './Chat.css'
import Message from '../Message'
import defaultAvatar from '../../images/defaultAvatar.jpg'
import { createIdRoom } from '../../functions';
import ChatContent from './ChatContent';

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      from: null,
      to: null,
      messages: []
    }
  }

  handleMessage = (e) => this.setState({ message: e.target.value })

  handleSubmit = () => {
    if (this.state.message === '')
      return;
    const {firebase, me, receiver} = this.props;
    let _message = {
      from: me.uid,
      content: this.state.message,
      time: firebase.database.ServerValue.TIMESTAMP
    }

    let roomID = createIdRoom(me.uid, receiver.uid)
    firebase.push(`messages/${roomID}`, _message);
    this.setState({ message: '' })
  }

  componentWillReceiveProps(newProps) {
    if(!newProps.with) return;
    if(!this.state.to || newProps.with.uid !== this.state.receiver.uid){
      this.setState({
        to: newProps.to
      }, () => this.props.firebase.database().ref(`messages/${createIdRoom(this.props.me.uid, newProps.with.uid)}`).on('value', snapshot => {
        if(snapshot.val()){
          let list = Object.keys(snapshot.val()).map(item => snapshot.val()[item]);
          this.setState({messages: list})
        }
      }))
    }
  }

  render() {
    const { me, receiver } = this.props;
    if(receiver){
      console.log(this.state.messages)
      return (
        <div className='chatContainer'>
          <div className='chatHead'>
                <div style={{marginLeft: 10, marginRight: 10, backgroundImage: `url('${receiver.photoURL ? receiver.photoURL : defaultAvatar}')`, width: 60, height: 60, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '50%', border: '2px solid white' }}></div>
                <span>Chat with <span style={{fontWeight: 500, fontSize: 20}}>{receiver.displayName}</span></span>
                <i style={{left: '95%', cursor: 'pointer', fontSize: 30}} className='material-icons'>star_border</i>
          </div>
          <ChatContent me={me} receiver={receiver} roomId={createIdRoom(me.uid, receiver.uid)}/>
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