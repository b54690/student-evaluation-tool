import {ADD_EVALUATION } from '../actions/evaluations'

export default (state = [], {type, payload}) => {
	switch(type) {
    case ADD_EVALUATION:
      return [...state, payload]

    default:
      return state
  }
}