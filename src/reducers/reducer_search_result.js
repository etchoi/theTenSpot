import _ from 'lodash';
import { GET_SEARCH } from '../actions';

export default function(state = {}, action){
  // console.log('search result reducer');
  switch (action.type){
    case GET_SEARCH:
      // console.log(action.payload.data);
      return _.mapKeys(action.payload.data, 'SalesRank');
  default:
    return state;
  }
}
