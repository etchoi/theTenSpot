import { GET_SEARCH } from '../actions/index.js';
export default function(state = [], action){
  switch (action.type){
  case GET_SEARCH:
    return action.payload.data;
  }
  return state;
}
