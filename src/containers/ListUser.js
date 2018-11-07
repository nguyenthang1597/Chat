import {compose} from 'redux'
import {connect} from 'react-redux';
import { firebaseConnect } from 'react-redux-firebase';
import ListUser from '../components/ListUser';

const mapStateToProps = state => ({
  users: state.firebase.data.presence || [],
  auth: state.firebase.auth,
  usersInfo: state.firebase.data.users
})


export default compose(
  firebaseConnect(props => [{path: 'presence', queryParams: ['orderByChild=time']}]),
  connect(mapStateToProps)
)(ListUser)