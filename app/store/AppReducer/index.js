import produce from 'immer';
import {START_LOADING, STOP_LOADING} from './constants';

const initialState = {
  isLoading: false,
  isLoggedIn: false,
  error: null,
  message: 'welcome to alpucart',
};

const AppReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case START_LOADING:
        draft.isLoading = true;
        break;

      case STOP_LOADING:
        draft.isLoading = false;
        break;

      default:
        return state;
    }
  });

export default AppReducer;
