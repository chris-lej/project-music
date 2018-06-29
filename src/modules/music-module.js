// ------------------------------------
// Constants
// ------------------------------------

export const UPDATE_ARTIST_REQUESTED = 'UPDATE_ARTIST_REQUESTED';
export const UPDATE_ARTIST = 'UPDATE_ARTIST';
export const UPDATE_SONG_REQUESTED = 'UPDATE_SONG_REQUESTED';
export const UPDATE_SONG = 'UPDATE_SONG';
export const UPDATE_LAST_ARTIST = 'UPDATE_LAST_ARTIST';
export const UPDATE_LAST_SONG = 'UPDATE_LAST_SONG';
export const TOGGLE_ACOUSTIC = 'TOGGLE_ACOUSTIC';
export const TOGGLE_LESSON = 'TOGGLE_LESSON';

// ------------------------------------
// Initial State
// ------------------------------------

const initialState = {
  artist: '',
  song: '',
  lastArtist: '',
  lastSong: '',
  artistIsUpdating: false,
  songIsUpdating: false,
  isAcoustic: false,
  isLesson: false
};

// ------------------------------------
// Selectors
// ------------------------------------

export const searchMusicTree = (state) => state.music || {};
export const searchMusicSong = (state) => searchMusicTree(state).song || '';
export const searchMusicArtist = (state) => searchMusicTree(state).artist || '';
export const searchLastArtist = (state) => searchMusicTree(state).lastArtist || '';
export const searchLastSong = (state) => searchMusicTree(state).lastSong || '';

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

export const updateLastArtist = (lastArtist) => {
  return dispatch => {
    dispatch({
      type: UPDATE_LAST_ARTIST,
      lastArtist
    });
  }
};

export const updateLastSong = (lastSong) => {
  return dispatch => {
    dispatch({
      type: UPDATE_LAST_SONG,
      lastSong
    });

    return(
      Promise.resolve()
    )
  }
};

export const toggleAcoustic = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_ACOUSTIC
    });
  }
};

export const toggleLesson = () => {
  return dispatch => {
    dispatch({
      type: TOGGLE_LESSON
    });
  }
};

// ------------------------------------
// Action Handlers
// ------------------------------------

const ACTION_HANDLERS = {
  [TOGGLE_LESSON]: (state) => ({
    ...state,
    isLesson: !state.isLesson
  }),
  [TOGGLE_ACOUSTIC]: (state) => ({
    ...state,
    isAcoustic: !state.isAcoustic
  }),
  [UPDATE_ARTIST_REQUESTED]: (state) => ({
    ...state,
    artistIsUpdating: true
  }),
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
  }),
  [UPDATE_LAST_ARTIST]: (state, payload) => ({
    ...state,
    lastArtist: payload.lastArtist
  }),
  [UPDATE_LAST_SONG]: (state, payload) => ({
    ...state,
    lastSong: payload.lastSong
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
