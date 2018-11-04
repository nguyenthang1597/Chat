import {compose} from 'redux'
import {connect} from 'react-redux'
import { withFirebase } from 'react-redux-firebase';
import LoginPage from '../components/LoginPage';


const mapAuthToProps = ({firebase: {auth}}) => ({auth})

export default compose(
  withFirebase,
  connect(mapAuthToProps)
)(LoginPage);