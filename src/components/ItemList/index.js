import React, { Fragment } from 'react'
import './ItemList.css'
import defaultAvatar from '../../images/defaultAvatar.jpg'
<<<<<<< HEAD

export default class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: '1m'
    }
  }

  calcTime = logoutAt => {
    return setInterval(() => {
      this.setState({ count: this.calc(logoutAt) })
    }, 60000);
  }

  calc = logoutAt => {
    let sub = new Date().getTime() - new Date(logoutAt).getTime();
    let minus = Math.round(sub / 60000);
    let hour = Math.round(minus/60);
    if (hour < 1)
      return minus + 'm';
    else
      return hour + 'h';
  }

  componentDidMount() {
    if (this.props.state !== true){
      this.setState({count: this.calc(this.props.state)}, () => this.calcTime(this.props.state))
=======
import moment from 'moment'
import {compose} from 'redux'

import {connect} from 'react-redux'
import { firebaseConnect } from 'react-redux-firebase';
import { addUserChat } from '../../actions';



class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'offline',
      time: null
    }
  }

  calcTime = timestamp => {
    return setInterval(() => {
      this.setState({ message: this.calc(timestamp) })
    }, 60000);
  }

  calc = timestamp => {
    let sub = moment() - moment(timestamp);
    console.log(moment() - moment(timestamp))
    let minus = Math.round(sub / 60000);
    let hour = Math.round(minus/60);
    if (hour < 1){
      if(minus < 1)
        return 'offline'
      return `left ${minus}m ago`;
    }
    else
      return `left ${hour}h ago`;
  }

  componentDidMount() {
    if (this.props.info.online !== true){
      this.setState({message: this.calc(this.props.info.time)}, () => this.calcTime(this.props.info.time))
>>>>>>> chỉnh sửa chat, thêm tiềm kiếm tên, thay đổi cấu trúc project
    }
      
  }

  componentWillReceiveProps(newProps) {
<<<<<<< HEAD
    if (newProps.state !== null) {
      this.setState({ count: this.calc(newProps.state) }, () => this.calcTime(newProps.state))
=======
    if (newProps.info.online === false && newProps.info.time !== this.state.time) {
      clearInterval(this.calcTime);
      this.setState({ message: this.calc(newProps.info.time), time: newProps.info.time }, () => this.calcTime(newProps.info.time))
>>>>>>> chỉnh sửa chat, thêm tiềm kiếm tên, thay đổi cấu trúc project
    }
  }

  componentWillUnmount(){
    clearTimeout(this.calcTime);
  }

  render() {
<<<<<<< HEAD
    const { name, state, photoURL, click, uid, from, filter } = this.props;
    let imgUrl = photoURL ? photoURL : defaultAvatar;
    return (
      <div className='itemContainer' onClick={() =>{ click({uid, name, imgUrl}); filter(from, uid)}}>
        <div className='itemImage'>
          <img className='listItemImg' src={imgUrl} />
        </div>
        <div className='itemInfo'>
          <div>{name}</div>
          <div className='Section'>
            {state === true &&
              <Fragment>
                <div className='active'></div>
                <div className='onlineText'>Online</div>
              </Fragment>
            }
            {state !== true &&
              <Fragment>
                <div className='offline'></div>
                <div className='offlineText'>left {this.state.count} ago</div>
              </Fragment>
            }
          </div>
        </div>
      </div>
    )
  }
}


=======
    const { info, user, click, from, to } = this.props;
    let imgUrl = user && user.photoURL ? user.photoURL : defaultAvatar;
    if(user){
      return (
        <div className='itemContainer' onClick={() => click(from, to)}>
          <div className='itemImage'>
            <img className='listItemImg' src={imgUrl} />
          </div>
          <div className='itemInfo'>
            <div>{user.displayName}</div>
            <div className='Section'>
              {info.online === true &&
                <Fragment>
                  <div className='active'></div>
                  <div className='onlineText'>Online</div>
                </Fragment>
              }
              {info.online === false &&
                <Fragment>
                  <div className='offline'></div>
                  <div className='offlineText'>{this.state.message}</div>
                </Fragment>
              }
            </div>
          </div>
        </div>
      )
    }

    return null;
  }
}

const mapStateToProps = (state, props) => ({
  user: state.firebase.data.users ? state.firebase.data.users[props.uid] : null,
  from: state.firebase.auth.uid,
  to: props.uid
})

const mapDispatchtoProps = dispatch => {
  return {
    click: (from, to) => dispatch(addUserChat(from, to))
  }
}
export default compose(
  firebaseConnect(props => [{path: `users/${props.uid}`}]),
  connect(mapStateToProps ,mapDispatchtoProps)
)(ItemList)
>>>>>>> chỉnh sửa chat, thêm tiềm kiếm tên, thay đổi cấu trúc project


