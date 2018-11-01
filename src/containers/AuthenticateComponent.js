import {connect} from 'react-redux';
import AuthenticateComponent from '../components/AuthenticateComponent';

const mapStateToProps = (state) => {
  return {
    User: state.auth.user
  }
}

export default connect(mapStateToProps)(AuthenticateComponent);