import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducers from './src/reducers';

export default configureStore = () => {
  return createStore(reducers, applyMiddleware(thunk));
};
