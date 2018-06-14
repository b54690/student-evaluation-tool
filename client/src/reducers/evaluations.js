import { GET_EVALUATIONS, ADD_EVALUATION } from '../actions/evaluations'

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