import { daoYoutubeGet } from '../dao/youtube-dao';

// ------------------------------------
// Constants
// ------------------------------------

export const VIDEO_REQUESTED = 'VIDEO_REQUESTED';
export const VIDEO_RECEIVE_GET_SUCCESS = 'VIDEO_RECEIVE_GET_SUCCESS';

// ------------------------------------
// Initial State
// ------------------------------------

export const initialState = {
  video: [],
  videoIsLoading: false
};

// ------------------------------------
// Selectors
// ------------------------------------

export const youtubeSearchTree = (state) => state.youtube.video.items || {};

// ------------------------------------
// Actions
// ------------------------------------

export const videoReceiveGetSuccess = (payload = {}) => ({
  type: VIDEO_RECEIVE_GET_SUCCESS,
  payload
});

export const videoReceiveGetFailure = (payload = {}) => () => Promise.reject(payload);

export const videoRequestGet = (term) => (dispatch) => {
  dispatch({
    type: VIDEO_REQUESTED
  });

  return (
    daoYoutubeGet(term)
      .then(
        (response) => dispatch(videoReceiveGetSuccess(response)),
        (err) => dispatch(videoReceiveGetFailure(err))
      )
  );
};

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [VIDEO_REQUESTED]: (state) => ({
    ...state,
    videoIsLoading: true
  }),
  [VIDEO_RECEIVE_GET_SUCCESS]: (state, action) => {
    if (action.payload instanceof Object) {
      const video = action.payload.data;
      return {
        ...state,
        video,
        videoIsLoading: false
      };
    }
    return {...state};
  }
};

// ------------------------------------
// Reducer
// ------------------------------------

const youTubeReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default youTubeReducer;
