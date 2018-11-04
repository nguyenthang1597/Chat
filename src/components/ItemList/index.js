import React, { Fragment } from 'react'
import './ItemList.css'
import defaultAvatar from '../../images/defaultAvatar.jpg'

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
    }
      
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




