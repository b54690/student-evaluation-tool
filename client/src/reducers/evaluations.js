import {ADD_EVALUATION, GET_EVALUATIONS } from '../actions/evaluations'

export default (state = [], {type, payload}) => {
	switch(type) {
    case ADD_EVALUATION:
      return [...state, payload]

    case GET_EVALUATIONS:
      return payload

    default:
      return state
  }
}