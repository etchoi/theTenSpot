import axios from 'axios';

export const GET_SEARCH = 'GET SEARCH';

export function getSearch(term) {
  const request = axios.get(`/search/${term}`);
  
  return {
    type: GET_SEARCH,
    payload: request
  }
}
