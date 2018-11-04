import React, { Component, Fragment } from 'react'
import './LoginPage.css'
import DialogBox from '../DialogBox'
<<<<<<< HEAD
import { login,loginWithGoogle } from '../../modules/auth'
=======
>>>>>>> chỉnh sửa chat, thêm tiềm kiếm tên, thay đổi cấu trúc project
import google from '../../images/google.png'

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDialog: false,
      email: '',
      password: '',
      message: null,
      loading: false
    }
  }

  handleTextChange = (e) => this.setState({ [e.target.name]: e.target.value })
  handleSubmit = async () => {
    await this.setState({message: ''});
    const { email, password } = this.state;
    if (email === '' || password === '') {
      this.setState({ message: 'Vui lòng điền đầy đủ thông tin!', showDialog: true });
      return;
    }

    this.setState({ loading: true, showDialog: true }, () => {
<<<<<<< HEAD
      login(email, password)
=======
      this.props.firebase.login({email, password})
>>>>>>> chỉnh sửa chat, thêm tiềm kiếm tên, thay đổi cấu trúc project
        .then(res => this.props.history.push('/'))
        .catch(err => {
          let code = err.code;
          switch (code) {
            case 'auth/invalid-email':
              return this.setState({
                loading: false,
                message: 'Sai định dạng email!'
              })
            case 'auth/wrong-password':
              return this.setState({
                loading: false,
                message: 'Mật khẩu không đúng!'
              })
            case 'auth/user-disabled':
              return this.setState({
                loading: false,
                message: 'Tài khoản đã bị khóa!'
              })
            case 'auth/user-not-found':
              return this.setState({
                loading: false,
                message: `Không tìm thấy email: ${email}`
              })
              default: return;
          }
        })
    })

  }

  handleLoginWithGoogle = async () => {
<<<<<<< HEAD
    await loginWithGoogle()
=======
    this.props.firebase.login({provider: 'google', type: 'popup'})
>>>>>>> chỉnh sửa chat, thêm tiềm kiếm tên, thay đổi cấu trúc project
  }
  render() {
    return (
      <Fragment>
        <div className='loginContainer'>
          <div className='title'>
            <h3>Login</h3>
          </div>
          <div className='form'>
            <div className='textField'>
              <input type='text' name='email' id='email' required={true} onChange={this.handleTextChange} />
              <label for='email'>Email</label>
            </div>
            <div className='textField'>
              <input type='password' name='password' id='password' required={true} onChange={this.handleTextChange} />
              <label for='password'>Password</label>
            </div>
          </div>
          <div className='loginButton' onClick={this.handleSubmit}>
            Login
          </div>
          <div className='footer'>
            <div className='register'>Register</div>
            <div className='forgetpassword'>Forget Password?</div>
          </div>
          <hr/>
          <div className='loginGoogle' onClick={this.handleLoginWithGoogle}>
            <img src={google} width={40} height={40}/>
            <div>Login with Google</div>
          </div>
        </div>
        <DialogBox visible={this.state.showDialog} onClose={() => this.setState({ showDialog: false })}>
          <div style={{ width: 300, height: 200, backgroundColor: '#317d31d1', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            {this.state.loading && <div className="lds-hourglass"></div>}
            {this.state.message && messageError(this.state.message)}
          </div>
        </DialogBox>
      </Fragment>

    )
  }
}


const messageError = (message) => <div style={{ color: 'white' }}>{message}</div>