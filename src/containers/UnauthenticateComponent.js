import {connect} from 'react-redux';
import UnauthenticateComponent from '../components/UnauthenticateComponent';

const mapStateToProps = ({firebase: {auth}}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(UnauthenticateComponent);