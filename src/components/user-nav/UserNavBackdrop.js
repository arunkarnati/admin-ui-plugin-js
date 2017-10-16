import { connect } from 'react-redux';
import Backdrop from '../backdrop';
import actions from '../../actions';

export default connect(null, { handleClick: actions.toggleUserNav })(Backdrop);