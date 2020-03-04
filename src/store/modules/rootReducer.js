import { combineReducers } from 'redux';

import cart from './cart/reducer';
import loading from './loading/reducer';

export default combineReducers({
  cart,
  loading,
});
