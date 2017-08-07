import _ from 'lodash';
import { GET_ITEM } from '../actions';

export default function(state = {}, action){
  // console.log(action);
  switch (action.type){
    case GET_ITEM:
      // console.log(action.payload.data);
      return { ...state, payload: action.payload.data };
  default:
    return state;
  }
}
