import _ from 'lodash';
import { GET_ITEM } from '../actions';

export default function(state = {}, action){
  switch (action.type){
    case GET_ITEM:
      console.log('payload');
      return { ...state, [action.payload.data[0].ASIN[0]]: action.payload.data };
  default:
    return state;
  }
}
