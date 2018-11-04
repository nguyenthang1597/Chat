import React, { Component, Fragment } from 'react'
import './LeftBar.css'
import defaultAvatar from '../../images/defaultAvatar.jpg';
import DialogBox from '../DialogBox'
export default class LeftBar extends Component {
  state = {
    showProfile: false
  }

  showDialogProfile = () => this.setState({showProfile: true})
  hideDialogProfile = () => this.setState({showProfile: false})
  render() {
    const { user, profile } = this.props;
    let srcImg = user.photoURL ? user.photoURL : defaultAvatar;
    return (
      <Fragment>
        <div className='topbarContainer'>
          <div onClick={this.showDialogProfile} style={{ border: '1px solid white', borderRadius: '50%', position: 'absolute', marginTop: 10, width: 52, height: 52, marginLeft: 9, backgroundImage: `url(${srcImg})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div style={{ position: 'absolute', width: 10, height: 10, borderRadius: '50%', backgroundColor: 'rgb(98, 203, 0)', top: 42, left: 42 }}></div>
          </div>
        </div>
        <DialogBox visible={this.state.showProfile} onClose={this.hideDialogProfile}>
          <div style={{width: 360, height: 230}}>
              <div style={{height: 110, position: 'relative', paddingLeft: 10}}>
                <img src={profile.photoURL} width={70} height={70} style={{position:'absolute',borderRadius: '50%', top: 20}}/>
                <div style={{position: 'relative', top: 51, left: 80, fontSize: 16}}>{profile.displayName}</div>
              </div>
              <div style={{position: 'relative', paddingLeft: 10, height: 30}}>Phone: 1234567890</div>
              {profile.email && <div style={{position: 'relative', paddingLeft: 10, height: 30}}>Email: {profile.email}</div>}
              <hr/>
              <div className='editProfile'>Chỉnh sửa thông tin</div>
          </div>
        </DialogBox>
      </Fragment>

    )
  }
}