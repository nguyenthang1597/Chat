import {compose} from 'redux'
import {connect} from 'react-redux'
import Chat from '../components/Chat';
import { withFirebase } from 'react-redux-firebase';

const mapStateToProps = state => {
  return {
    users: state.firebase.data.users,
    me: state.firebase.auth,
  }
}

export default compose(
  withFirebase,
  connect(mapStateToProps)
)(Chat);