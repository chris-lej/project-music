import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from './counter';
import tabs from './tabs-module';
import music from './music-module';

export default combineReducers({
  routing: routerReducer,
  music,
  counter,
  tabs
});
