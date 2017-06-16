import { combineReducers } from 'redux';
import SearchResultReducer from './reducer_search_result';

const rootReducer = combineReducers({
  search_result: SearchResultReducer
});

export default rootReducer;
