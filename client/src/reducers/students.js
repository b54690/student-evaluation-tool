import {ADD_STUDENT, UPDATE_STUDENT, GET_STUDENTS, DELETE_STUDENT} from '../actions/students'

export default (state = [], {type, payload}) => {
  switch (type) {
    case GET_STUDENTS:
        return payload

    case ADD_STUDENT:
      return [...state, payload]

    case DELETE_STUDENT:
      return state.filter(student => student.id !== payload)

    default:
      return state
  }
}