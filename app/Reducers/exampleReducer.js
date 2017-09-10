import createReducer from './createReducer'
import * as ActionTypes from '../Actions/action-types'

/** Reducers are availible as values to be mapped to React's state. */
/**
 * Reducers do not just return default values. 
 * They always return the accumulation of the state (based on all previous and current actions). 
 * Therefore, they act as a reducer of state. 
 * Each time a redux reducer is called, the state is passed in with the action (state, action)
 */


export const count = createReducer(0, {
  [ActionTypes.COUNT](state, action) {
    return state + 1;
  }
});