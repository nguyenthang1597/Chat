<<<<<<< HEAD
import {connect} from 'react-redux';
import { setUser } from '../actions/auth';
import LoginPage from '../components/LoginPage';

const mapDispatchToProps = dispatch => {
  return {
    setAuth: (token, user) => dispatch(setUser(token, user))
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);
=======
import {compose} from 'redux'
import {connect} from 'react-redux'
import { withFirebase } from 'react-redux-firebase';
import LoginPage from '../components/LoginPage';


const mapAuthToProps = ({firebase: {auth}}) => ({auth})

export default compose(
  withFirebase,
  connect(mapAuthToProps)
)(LoginPage);
>>>>>>> chỉnh sửa chat, thêm tiềm kiếm tên, thay đổi cấu trúc project
