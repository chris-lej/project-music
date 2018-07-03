import { daoTabsGet } from '../dao/tabs-dao.js';
import {TOGGLE_ACOUSTIC, TOGGLE_LESSON} from "./music-module";

// ------------------------------------
// Constants
// ------------------------------------

export const TABS_REQUESTED = 'TABS_REQUESTED'
export const TABS_RECEIVE_GET_SUCCESS = 'TABS_RECEIVE_GET_SUCCESS';
export const TOGGLE_AUTOSCROLL = 'TOGGLE_SCROLL';

// ------------------------------------
// Initial State
// ------------------------------------

export const initialState = {
  objects: [],
  tabsIsLoading: false,
  autoscroll: false
};

// ------------------------------------
// Selectors
// ------------------------------------

export const tabsTree = (state) => state.tabs || {};
export const tabsIsLoading = (state) => state.tabs.tabsIsLoading || false;
export const tabsObjects = (state) => tabsTree(state).objects || [];
export const tabsExist = (state) => tabsTree(state).objects.length || false;

// ------------------------------------
// Actions
// ------------------------------------

export const tabsReceiveGetSuccess = (payload = {}) => ({
  type: TABS_RECEIVE_GET_SUCCESS,
  payload
});

export const tabsRequestGet = (term) => (dispatch) => {
  dispatch({
    type: TABS_REQUESTED
  });

  return (
    daoTabsGet(term)
      .then(
        (response) => dispatch(tabsReceiveGetSuccess(response.data)),
        (err) => dispatch(tabsReceiveGetFailure(err))
      )
  )
};

export const tabsReceiveGetFailure = (payload = {}) => () => Promise.reject(payload);

export const toggleAutoscroll = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_AUTOSCROLL
    });
  }
};

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [TOGGLE_AUTOSCROLL]: (state) => ({
    ...state,
    autoscroll: !state.autoscroll
  }),
  [TABS_REQUESTED]: (state) => ({
    ...state,
    tabsIsLoading: true
  }),
  [TABS_RECEIVE_GET_SUCCESS]: (state, action) => {
    if (action.payload instanceof Object) {
      const {objects} = action.payload;
      return {
        ...state,
        objects,
        tabsIsLoading: false
      };
    }
    return {...state};
  }
};

// ------------------------------------
// Reducer
// ------------------------------------

const tabsReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default tabsReducer;
