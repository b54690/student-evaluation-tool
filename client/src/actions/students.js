import * as request from 'superagent'
import {baseUrl} from '../constants'
// import {logout} from './teachers'
// import {isExpired} from '../jwt'

export const ADD_STUDENT = 'ADD_STUDENT'
export const GET_STUDENTS = 'GET_STUDENTS'
export const UPDATE_STUDENT = 'UPDATE_STUDENT'
export const DELETE_STUDENT = 'DELETE_STUDENT'
export const GET_STUDENT = 'GET_STUDENT'

export const getStudent = (StudentId) => (dispatch, getState) => {
  const state = getState()
//   const jwt = state.currentUser.jwt
   
  request
    .get(`${baseUrl}/students/${StudentId}`)
    // .set('Authorization', `Bearer ${jwt}`)
    .then(response => {
      dispatch({
        type: GET_STUDENT,
        payload: response.body
      })})
    .catch(err => console.log(err))
  
  }

  export const updateStudent = (StudentId, updates) => (dispatch) => {
    // const state = getState()
    // const jwt = state.currentUser.jwt

    request
    .put(`${baseUrl}/students/${StudentId}`)
//    .set('Authorization', `Bearer ${jwt}`)
    .send(updates)
    .then(response => {
      dispatch({
        type: UPDATE_STUDENT,
        payload: response.body
      })})
    .catch(err => console.log(err))
}
  
  export const getStudents = (batchId) => (dispatch, getState) => {
    // const state = getState()
    // const jwt = state.currentUser.jwt

    request
      .get(`${baseUrl}/batches/${batchId}/students`)
    //   .set('Authorization', `Bearer ${jwt}`)
      .then(response => dispatch({
          type: GET_STUDENTS,
          payload: response.body
      }))
      .catch(err => console.error(err))
  }

  export const addStudent = (student) => (dispatch, getState) => {
    // const state = getState()
    // const jwt = state.currentUser.jwt

    // if (isExpired(jwt)) return dispatch(logout())
    
    request
      .post(`${baseUrl}/batches/${student.batchId}/students`)
    //   .set('Authorization', `Bearer ${jwt}`)
      .send(student)
      .then(response => dispatch({
          type: ADD_STUDENT,
          payload: student
      }))
      .catch(err => console.error(err))
  }

  export const deleteStudent = (studentId) => (dispatch, getState) => {
    // const state = getState()
    // const jwt = state.currentUser.jwt
  
//    if (isExpired(jwt)) return dispatch(logout())
    
    request
    .delete(`${baseUrl}/students/${studentId}`)
    // .set('Authorization', `Bearer ${jwt}`)
    .then(response => dispatch({
      type: DELETE_STUDENT,
      payload: response.body
    }))
  }
