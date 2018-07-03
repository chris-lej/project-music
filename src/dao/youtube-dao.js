import axios from 'axios';

const YOUTUBE_URL = 'https://www.googleapis.com/youtube/v3/search';
const YOUTUBE_API_KEY = "AIzaSyDXQ1H2iW0GC1wlN5X_U55Lhv2VX3QSjc4";

export function daoYoutubeGet(term) {
  const params = {
    part: 'snippet',
    key: YOUTUBE_API_KEY,
    q: term,
    type: 'video'
  };

  return axios.get(YOUTUBE_URL, { params: params });
}
