import {connect} from 'react-redux';
import { setUser } from '../actions/auth';
import LoginPage from '../components/LoginPage';

const mapDispatchToProps = dispatch => {
  return {
    setAuth: (token, user) => dispatch(setUser(token, user))
  }
}

export default connect(null, mapDispatchToProps)(LoginPage);