import _ from 'lodash';
import { GET_ITEM } from '../actions';

export default function(state = {}, action){
  // console.log(action);
  switch (action.type){
    case GET_ITEM:
      return { ...state, payload: action.payload[0] };
  default:
    return state;
  }
}
