import {ADD_BATCH, GET_BATCH, GET_BATCHES} from '../actions/batches'

export default (state = [], {type, payload}) => {
  switch (type) {
    case GET_BATCH:
      return payload

    case GET_BATCHES:
        return payload

    case ADD_BATCH:
      return [...state, payload]

    default:
      return state
  }
}