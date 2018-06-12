import {ADD_TEACHER, UPDATE_TEACHER, UPDATE_TEACHERS} from '../actions/teachers'

/*
The state will contain the users in an object with the game ID as key
*/

export default (state = null, {type, payload}) => {
  switch (type) {
    case ADD_TEACHER:
      return {
        ...state,
        [payload.id]: payload
      }

    case UPDATE_TEACHER:
      return {
        ...state,
        [payload.id]: payload
      }

    case UPDATE_TEACHERS:
      return payload.reduce((teachers, teacher) => {
        teachers[teacher.id] = teacher
        return teachers
      }, {})

    default:
      return state
  }
}
