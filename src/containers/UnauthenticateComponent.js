import {connect} from 'react-redux';
import UnauthenticateComponent from '../components/UnauthenticateComponent';

const mapStateToProps = (state) => {
  return {
    User: state.auth.user
  }
}

export default connect(mapStateToProps)(UnauthenticateComponent);