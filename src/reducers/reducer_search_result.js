import _ from 'lodash';
import { GET_SEARCH } from '../actions';

export default function(state = {}, action){
  switch (action.type){
    case GET_SEARCH:
      return _.mapKeys(action.payload.data, 'ASIN');
  default:
    return state;
  }
}
