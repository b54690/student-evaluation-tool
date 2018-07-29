import { GET_STUDENT, UPDATE_STUDENT } from '../actions/students'
import {LATEST_EVALUATION} from '../actions/evaluations'

export default (state = {}, {type, payload}) => {
  switch (type) {
    case GET_STUDENT:
    return payload

    case LATEST_EVALUATION:
return {...state, latestEvaluation: payload.latestEvaluation}

    case UPDATE_STUDENT:
      if (payload.id === state.id) {
    return payload
}



else return state
    default:
      return state
  }
}