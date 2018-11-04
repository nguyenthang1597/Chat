<<<<<<< HEAD
import {connect} from 'react-redux';
import Chat from '../components/Chat'
import { filterByUid } from '../actions/chat';
import { watchMessage } from '../modules/message';

const mapStateToProps = (state) => {
  return {
    receiver: state.chat.receiver,
    from: {uid: state.firebase.auth.uid, displayName: state.firebase.auth.displayName ? state.firebase.auth.displayName :  state.firebase.auth.email.slice(0,  state.firebase.auth.email.indexOf('@'))},
    listMessage: state.chat.filterlist,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    refressMessage: (from, to) => dispatch(filterByUid(from, to)),
    watchMessages: (from, to) => watchMessage(dispatch, from, to)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
=======
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
>>>>>>> chỉnh sửa chat, thêm tiềm kiếm tên, thay đổi cấu trúc project
