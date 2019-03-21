import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import mainReducer from './reducers/mainReducer';

const store = createStore(
  combineReducers({ mainReducer }),
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
