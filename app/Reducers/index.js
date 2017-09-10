import { combineReducers } from 'redux';
import * as exampleReducer from './exampleReducer'
//import * as navigationReducer from './navigation'

export default combineReducers(Object.assign(
  // other reducers goes here.
  exampleReducer,
));