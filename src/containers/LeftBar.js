import {connect} from 'react-redux';
import LeftBar from '../components/LeftBar'

const mapStateToProps = ({firebase: {auth}}) => ({user: auth, profile: auth.providerData[0]})

export default connect(mapStateToProps)(LeftBar);

