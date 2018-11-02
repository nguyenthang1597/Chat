import './ListItem.css'
import defaultAvatar from '../../../images/defaultAvatar.jpg';
import React, { Component } from 'react'

export default class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: null,
      logoutAt: this.props.logoutAt
    }
    this.calcTime();
  }

  calc = () => {
    let now = new Date();
    let calc = now.getTime() - new Date(this.state.logoutAt).getTime();
    let minus = Math.round(calc/60000);
    if(Number.isNaN(minus))
      return '0m';
    let hour = Math.random(minus / 60);
    if(hour > 24)
      return '';
    if(minus > 60)
      return Math.round(minus/60) + "h"
    return minus + "m";
  }
  calcTime = () => {
    setTimeout(() => {
      if(this.state.logoutAt === '') return;

      this.setState({count: this.calc()})
    }, 60000) 
  }
  componentWillReceiveProps(newProps){
    if(newProps.logoutAt !== this.state.logoutAt){
      this.setState({logoutAt: newProps.logoutAt, count: '0m'}, ()=> this.calcTime())
    }
  }
  componentDidMount(){
    if(this.state.logoutAt && this.state.logoutAt !== ''){
      this.setState({count: this.calc()}, () => this.calcTime())
    }
  }
  componentWillUnmount(){
    clearTimeout(this.calcTime)
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


