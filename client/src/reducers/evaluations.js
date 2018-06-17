import {ADD_EVALUATION, GET_EVALUATIONS } from '../actions/evaluations'
import {LATEST_EVALUATION} from '../actions/evaluations'

export default (state = [], {type, payload}) => {
	switch(type) {
    case ADD_EVALUATION:
      return [...state, payload]

    case GET_EVALUATIONS:
      return payload

    case LATEST_EVALUATION:
      return {...state, latestEvaluation: payload.latestEvaluation}

    default:
      return state
  }
}