import axios from 'axios';

const TABS_API_KEY = "";

export function daoTabsGet(term) {
  return axios.get(`http://api.guitarparty.com/v2/songs/?query=${term}`, {
    headers: {
      "Guitarparty-Api-Key": TABS_API_KEY
    }
  });
}
