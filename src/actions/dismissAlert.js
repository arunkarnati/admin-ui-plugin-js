import { actionTypes } from '../constants';

export default id => ({
  type: actionTypes.ALERT_REMOVED,
  id,
});
