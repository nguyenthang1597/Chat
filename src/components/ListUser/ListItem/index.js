import './ListItem.css'
import defaultAvatar from '../../../images/defaultAvatar.jpg';
import React, { Component } from 'react'

export default class ListItem extends Component {
  constructor(props) {
    super(props);
   
    if(this.props.logoutAt!==""){
      this.state = {
        count: this.calc()
      }
      this.calcTime();
    }
  }

  calc = () => {
    let now = new Date();
    let calc = now.getTime() - new Date(this.props.logoutAt).getTime();
    let minus = Math.round(calc/60000);
    let hour = Math.random(minus / 60);
    if(hour > 24)
      return '';
    if(minus > 60)
      return Math.round(minus/60) + "h"
    return minus + "m";
  }
  calcTime = () => {
    setTimeout(() => {
      this.setState({count: this.calc()})
    }, 60000) 
  }
  
  render() {
    const {url, name, active, logoutAt} = this.props;
    let img = url ? url : defaultAvatar;
    return(
      <div className='itemContainer'>
        <div className='itemImage'>
          <img src={img} className='listItemImg'/>
        </div>
        <div className='displayName'>{name}</div>
        <div className='status'>
          {active && <div className='active'></div>}
          {!active && <div style={{paddingRight: 5}}>{this.state.count}</div>}
        </div>
      </div>
    )
  }
}


