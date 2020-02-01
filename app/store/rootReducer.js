import {combineReducers} from 'redux';

// import reducers
import AppReducer from './AppReducer';

const rootReducer = combineReducers({
  app: AppReducer,
});

export default rootReducer;
