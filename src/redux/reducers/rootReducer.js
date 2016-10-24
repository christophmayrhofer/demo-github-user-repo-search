import { combineReducers } from 'redux-immutable';
import repositoriesSearchReducer from './repositoriesSearchReducer';

const rootReducer = combineReducers({
  repositoriesSearch: repositoriesSearchReducer,
});

export default rootReducer;
