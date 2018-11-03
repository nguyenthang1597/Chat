import {connect} from 'react-redux';
import AuthenticateComponent from '../components/AuthenticateComponent';

const mapStateToProps = ({firebase: {auth}}) => {
  return {
    auth,
  }
}

export default connect(mapStateToProps)(AuthenticateComponent);