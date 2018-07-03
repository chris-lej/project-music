import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import tabs from './tabs-module';
import music from './music-module';
import youtube from './youtube-module'

export default combineReducers({
  routing: routerReducer,
  music,
  tabs,
  youtube
});
