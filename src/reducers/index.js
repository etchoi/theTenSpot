import { combineReducers } from 'redux';
import SearchResultReducer from './reducer_search_result';
import ViewItemReducer from './reducer_view_item';

const rootReducer = combineReducers({
  search_result: SearchResultReducer,
  view_item: ViewItemReducer
});

export default rootReducer;
