import {connect} from 'react-redux';
import TopBar from '../components/TopBar';

const mapStateToProps = ({firebase: {auth}}) => {
  return {
    user: auth,
    profile: auth.providerData[0]
  }
}

export default connect(mapStateToProps)(TopBar);