import {connect} from 'react-redux';
import ListUser from '../components/ListUser';


const mapStateToProps = state => {
  return {
    list: state.useronline.list,
    count: state.useronline.count
  }
}


export default connect(mapStateToProps)(ListUser);