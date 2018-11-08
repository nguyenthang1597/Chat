import React, { Fragment } from 'react'
import './ItemList.css'
import defaultAvatar from '../../images/defaultAvatar.jpg'
import moment from 'moment'

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
    let minus = Math.round(sub / 60000);
    let hour = Math.round(minus / 60);
    if (hour < 1) {
      if (minus < 1)
        return 'offline'
      return `left ${minus}m ago`;
    }
    else
      return `left ${hour}h ago`;
  }

  componentDidMount() {
    if (this.props.item.online !== true) {
      this.setState({ message: this.calc(this.props.item.time) }, () => this.calcTime(this.props.item.time))
    }

  }

  componentWillReceiveProps(newProps) {
    if (newProps.item.online === false && newProps.item.time !== this.state.time) {
      clearInterval(this.calcTime);
      this.setState({ message: this.calc(newProps.item.time), time: newProps.item.time }, () => this.calcTime(newProps.item.time))
    }
  }

  componentWillUnmount() {
    clearTimeout(this.calcTime);
  }

  render() {
    const { item, me } = this.props;
    let imgUrl = item.photoURL ? item.photoURL : defaultAvatar;
    return (
      <div className='itemContainer' onClick={() => this.props.setReceiver({ uid: item.uid, photoURL: item.photoURL, displayName: item.displayName, star: item.star })}>
        <div className='itemImage'>
          <img className='listItemImg' src={imgUrl} alt='avatarUser' />
        </div>
        <div className='itemInfo'>
          <div>{item.displayName}</div>
          <div className='Section'>
            {item.online === true &&
              <Fragment>
                <div className='active'></div>
                <div className='onlineText'>Online</div>
              </Fragment>
            }
            {item.online === false &&
              <Fragment>
                <div className='offline'></div>
                <div className='offlineText'>{this.state.message}</div>
              </Fragment>
            }
          </div>
        </div>
        <div className='star'>
          {item.star && item.star[me] && <i style={{ cursor: 'pointer', fontSize: 30, color: 'yellow' }} className='material-icons'>star_rate</i>}
        </div>

      </div>
    )
  }
}

export default ItemList;


