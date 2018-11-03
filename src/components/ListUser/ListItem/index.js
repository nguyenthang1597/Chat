import React, { Fragment } from 'react'
import './ListItem.css'
import defaultAvatar from '../../../images/defaultAvatar.jpg'
import { setImmediate } from 'timers';

export default class ListItem extends React.Component {
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
    let hour = minus / 60;
    if (hour < 1)
      return minus + 'm';
    else
      return hour + 'h';
  }

  componentDidMount() {
    if (this.props.state !== true)
      this.calcTime(this.props.state);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.state !== null) {
      this.setState({ count: this.calc(newProps.state) }, () => this.calcTime(newProps.state))
    }
  }

  componentWillUnmount(){
    clearTimeout(this.calcTime);
  }

  render() {
    const { name, state, photoURL } = this.props;
    return (
      <div className='itemContainer'>
        <div className='itemImage'>
          <img className='listItemImg' src={photoURL ? photoURL : defaultAvatar} />
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
                <div className='onlineText'>left {this.state.count} ago</div>
              </Fragment>
            }
          </div>
        </div>
      </div>
    )
  }
}




