<<<<<<< HEAD
import {connect} from 'react-redux';
import ListUser from '../components/ListUser';


const mapStateToProps = state => {
  return {
    listStates: state.useronline.states,
    displayNames: state.useronline.displayNames,
    user: state.firebase.auth
  }
}


export default connect(mapStateToProps)(ListUser);
=======
import {compose} from 'redux'
import {connect} from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import ListUser from '../components/ListUser';

const mapStateToProps = state => ({
  users: state.firebase.data.presence,
  auth: state.firebase.auth,
  usersInfo: state.firebase.data.users
})


export default compose(
  firebaseConnect(props => [{path: 'presence', queryParams: ['orderByChild=time']}]),
  connect(mapStateToProps)
)(ListUser)
>>>>>>> chỉnh sửa chat, thêm tiềm kiếm tên, thay đổi cấu trúc project
