import {connect} from 'react-redux';
import { addReceiver, filterByUid } from '../actions/chat';
import ItemList from '../components/ItemList'

const mapDispatchToProps = dispatch => {
  return {
    click: (uid) => dispatch(addReceiver(uid)),
    filter: (from, to) =>  dispatch(filterByUid(from, to))
  }
}

const mapStateToProps = state =>{
  return {
    from: state.firebase.auth.uid
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);