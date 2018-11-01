import {connect} from 'react-redux';
import TopBar from '../components/TopBar';

const mapStateToProps = (state) => {
  return {
    user: state.auth.user
  }
}

export default connect(mapStateToProps)(TopBar);