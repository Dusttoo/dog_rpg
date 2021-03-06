import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import breedReducer from './breed';
import dogReducer from './dog';
import groupReducer from './group';
import kennelReducer from './kennel';
import session from './session'

const rootReducer = combineReducers({
  session,
  kennel: kennelReducer,
  groups: groupReducer,
  breeds: breedReducer,
  dogs: dogReducer
});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
