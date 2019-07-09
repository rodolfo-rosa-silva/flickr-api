import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../../routes/history';

import filter from './filter';

export default combineReducers({
  router: connectRouter(history),
  filter,
});
