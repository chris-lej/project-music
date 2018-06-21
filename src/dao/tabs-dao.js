import axios from 'axios';

const TABS_API_KEY = "e72fcea8cdfcd395c5ed5b4f276e1909fda46a63";

export function daoTabsGet(term) {
  return axios.get(`http://api.guitarparty.com/v2/songs/?query=${term}`, {
    headers: {
      "Guitarparty-Api-Key": TABS_API_KEY
    }
  });
}
