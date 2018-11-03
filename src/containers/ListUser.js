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