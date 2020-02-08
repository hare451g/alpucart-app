import React from 'react';
import {Provider} from 'react-redux';

import store from '../../store';

import HomeContainer from '../../containers/HomeContainer';

function App() {
  return (
    <Provider store={store}>
      <HomeContainer />
    </Provider>
  );
}

export default App;
