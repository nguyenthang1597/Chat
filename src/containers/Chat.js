import {compose} from 'redux'
import {connect} from 'react-redux'
import Chat from '../components/Chat';
import { firebaseConnect } from 'react-redux-firebase';

const mapStateToProps = state => {
  return {
    users: state.firebase.data.users,
    from: state.chat.from,
    to: state.chat.to,
    messages: state.firebase.data.messages 
  }
}

export default compose(
  firebaseConnect(props => [{path: 'messages', queryParams: ['orderByChild=time']},{path: 'users'}]),
  connect(mapStateToProps)
)(Chat);