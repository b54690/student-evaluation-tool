import {DELETE_STUDENT, ADD_STUDENT, GET_STUDENTS} from '../actions/students'

export default (state = [], {type, payload}) => {
  switch (type) {
    case GET_STUDENTS:
        return payload

    case DELETE_STUDENT:
        return state.filter(student => student.id !== payload)

    case ADD_STUDENT:
      return [...state, payload]

    default:
      return state
  }
}