import axios from 'axios';

export const GET_SEARCH = 'get_search';
export const GET_ITEM = 'get_item';
const ROOT_URL = 'http://localhost:8080';

export function getSearch(term) {
  const request = axios.get(`${ROOT_URL}/search/${term}`);
  // console.log(request);
  return {
    type: GET_SEARCH,
    payload: request
  };
}

// export function showItem(id) {
//   const request = axios.get(`${ROOT_URL}/item/${id}`);
//   // console.log(GET_ITEM, request);
//   return {
//     type: GET_ITEM,
//     payload: request
//   };
// }
// export function getDetail(item) {
//   console.log('clicked me');
// }
