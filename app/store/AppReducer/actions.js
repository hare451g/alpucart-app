import {STOP_LOADING, START_LOADING} from './constants';

function stopLoading() {
  return {
    type: STOP_LOADING,
    payload: {},
  };
}

function startLoading() {
  return {
    type: START_LOADING,
    payload: {},
  };
}

export {stopLoading, startLoading};
