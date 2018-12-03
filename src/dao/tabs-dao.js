import axios from 'axios';

const TABS_API_KEY = '7893b02e098cb17f202c1900b99f321248be135b';

export function daoTabsGet(term) {
  return axios.get(`http://api.guitarparty.com/v2/songs/?query=${term}`, {
    headers: {
      'Guitarparty-Api-Key': TABS_API_KEY
    }
  });
}
