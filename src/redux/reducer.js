import { combineReducers } from 'redux';
import * as homeReducer from '~/pages/home/reducer';

export default combineReducers({
  home: combineReducers(homeReducer),
});
