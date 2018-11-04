import React, { Fragment } from 'react'
import './ItemList.css'
import defaultAvatar from '../../images/defaultAvatar.jpg'
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
    }
      
  }

  componentWillReceiveProps(newProps) {
    if (newProps.info.online === false && newProps.info.time !== this.state.time) {
      clearInterval(this.calcTime);
      this.setState({ message: this.calc(newProps.info.time), time: newProps.info.time }, () => this.calcTime(newProps.info.time))
    }
  }

  componentWillUnmount(){
    clearTimeout(this.calcTime);
  }

  render() {
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


