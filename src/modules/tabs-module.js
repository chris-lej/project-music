import { daoTabsGet } from '../dao/tabs-dao.js';

// ------------------------------------
// Constants
// ------------------------------------

export const TABS_RECEIVE_GET_SUCCESS = 'TABS_RECEIVE_GET_SUCCESS';

// ------------------------------------
// Initial State
// ------------------------------------

export const initialState = {
  objects: []
};

// ------------------------------------
// Selectors
// ------------------------------------



// ------------------------------------
// Actions
// ------------------------------------

export const tabsReceiveGetSuccess = (payload = {}) => ({
  type: TABS_RECEIVE_GET_SUCCESS,
  payload
});

export const tabsRequestGet = (term) => (dispatch) => daoTabsGet(term)
  .then(
    (response) => dispatch(tabsReceiveGetSuccess(response.data)),
    (err) => dispatch(tabsReceiveGetFailure(err))
  );

export const tabsReceiveGetFailure = (payload = {}) => () => Promise.reject(payload);

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [TABS_RECEIVE_GET_SUCCESS]: (state, action) => {
    if (action.payload instanceof Object) {
      const {objects} = action.payload;
      return {
        ...state,
        objects
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
