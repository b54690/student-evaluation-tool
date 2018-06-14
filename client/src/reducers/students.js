import {ADD_STUDENT, UPDATE_STUDENT, GET_STUDENTS, DELETE_STUDENT} from '../actions/students'
// [user1, user2, user3] [[user1, user2] user3]

export default (state = [], {type, payload}) => {
  switch (type) {
    case GET_STUDENTS:
        return payload

    case UPDATE_STUDENT:
        return payload


    case ADD_STUDENT:
      return [...state, payload]

    case DELETE_STUDENT:
      return state.filter(student => student.id !== payload)

    default:
      return state
  }
}