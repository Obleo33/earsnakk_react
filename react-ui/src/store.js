import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/index';
import thunk from 'redux-thunk';

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const configureStore = () => {
  const store = createStore(
    rootReducer,
    devTools,
    applyMiddleware(thunk)
  );
  return store;
}

export default configureStore;
