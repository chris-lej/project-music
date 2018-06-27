// ------------------------------------
// Constants
// ------------------------------------

export const UPDATE_ARTIST_REQUESTED = 'UPDATE_ARTIST_REQUESTED';
export const UPDATE_ARTIST = 'UPDATE_ARTIST';
export const UPDATE_SONG_REQUESTED = 'UPDATE_SONG_REQUESTED';
export const UPDATE_SONG = 'UPDATE_SONG';

// ------------------------------------
// Initial State
// ------------------------------------

const initialState = {
  artist: '',
  song: '',
  artistIsUpdating: false,
  songIsUpdating: false
};

// ------------------------------------
// Selectors
// ------------------------------------

export const searchMusicTree = (state) => state.music || {};
export const searchMusicSong = (state) => searchMusicTree(state).song || '';
export const searchMusicArtist = (state) => searchMusicTree(state).artist || '';

// ------------------------------------
// Actions
// ------------------------------------

export const updateArtist = (artist) => {
  return dispatch => {
    dispatch({
      type: UPDATE_ARTIST_REQUESTED
    });

    dispatch({
      type: UPDATE_ARTIST,
      artist
    })
  }
};

export const updateSong = (song) => {
  return dispatch => {
    dispatch({
      type: UPDATE_SONG_REQUESTED
    });

    dispatch({
      type: UPDATE_SONG,
      song
    })
  }
};

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [UPDATE_ARTIST_REQUESTED]: (state) => ({
    ...state,
    artistIsUpdating: true
  }),
  [UPDATE_ARTIST]: (state, payload) => ({
    ...state,
    artist: payload.artist,
    artistIsUpdating: !state.artistIsUpdating
  }),
  [UPDATE_SONG_REQUESTED]: (state, action) => ({
    ...state,
    songIsUpdating: true
  }),
  [UPDATE_SONG]: (state, payload) => ({
    ...state,
    song: payload.song,
    songIsUpdating: !state.songIsUpdating
  })
};

// ------------------------------------
// Reducer
// ------------------------------------

const musicReducer = (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
};

export default musicReducer;


