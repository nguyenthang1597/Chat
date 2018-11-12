import React, { Component, Fragment } from 'react'
import './Chat.css'
import defaultAvatar from '../../images/defaultAvatar.jpg'
import { createIdRoom } from '../../functions';
import ChatContent from './ChatContent';
import DialogBox from '../DialogBox';
import Uploader from '../Uploader';
export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      from: null,
      to: null,
      messages: [],
      star: false,
      showBox: false
    }
  }

  handleMessage = (e) => this.setState({ message: e.target.value })

  closeBox = () => this.setState({ showBox: false });

  handleSubmit = () => {
    if (this.state.message === '')
      return;
    const { firebase, me, receiver } = this.props;
    let _message = {
      from: me.uid,
      content: this.state.message,
      time: firebase.database.ServerValue.TIMESTAMP
    }

    let roomID = createIdRoom(me.uid, receiver.uid)
    firebase.push(`messages/${roomID}`, _message);
    this.setState({ message: '' })
  }

  pushUrlImg = (url) => {
    const { firebase, me, receiver } = this.props;
    let _message = {
      from: me.uid,
      content: url,
      time: firebase.database.ServerValue.TIMESTAMP
    }

    let roomID = createIdRoom(me.uid, receiver.uid)
    firebase.push(`messages/${roomID}`, _message);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.receiver && newProps.me) {
      this.props.firebase.database().ref(`/presence/${newProps.receiver.uid}/star/${newProps.me.uid}`).on('value', snapshot => {
        this.setState({ star: snapshot.val() })
      })
    }

  }

  setStar = () => this.props.firebase.database().ref(`/presence/${this.props.receiver.uid}/star/${this.props.me.uid}`).set(true);

  unStar = () => {
    this.props.firebase.database().ref(`/presence/${this.props.receiver.uid}/star/${this.props.me.uid}`).set(false)
    this.forceUpdate();
  }
  render() {
    const { me, receiver } = this.props;
    if (receiver) {
      return (
        <Fragment>
          <div className='chatContainer'>
            <div className='chatHead'>
              <div style={{ marginLeft: 10, marginRight: 10, backgroundImage: `url('${receiver.photoURL ? receiver.photoURL : defaultAvatar}')`, width: 60, height: 60, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center', borderRadius: '50%', border: '2px solid white' }}></div>
              <span>Chat with <span style={{ fontWeight: 500, fontSize: 20 }}>{receiver.displayName}</span></span>
              {
                this.state.star && <i style={{ left: '95%', cursor: 'pointer', fontSize: 30, color: 'yellow' }} className='material-icons' onClick={() => this.unStar()}>star_rate</i>
              }
              {
                !this.state.star && <i style={{ left: '95%', cursor: 'pointer', fontSize: 30 }} className='material-icons' onClick={() => this.setStar()}>star_border</i>
              }

            </div>
            <ChatContent me={me} receiver={receiver} roomId={createIdRoom(me.uid, receiver.uid)} />
            <div className='inputbox'>
              <textarea className='messageinput' name='message' onChange={this.handleMessage} value={this.state.message} />
              <div className='control'>
                <i className='material-icons addpicture' onClick={() => this.setState({ showBox: true })}>insert_photo</i>
                <div className='send' onClick={this.handleSubmit}>Send</div>
              </div>
            </div>
          </div>
          <DialogBox visible={this.state.showBox} onClose={() => this.setState({ showBox: false })} >
            <Uploader pushUrlImg={this.pushUrlImg} onClose={() => this.setState({showBox: false})}/>
          </DialogBox>
        </Fragment>

      )
    }
    return null;
  }
}