import * as request from 'superagent'
import {baseUrl} from '../constants'

export const ADD_STUDENT = 'ADD_STUDENT'
export const GET_STUDENTS = 'GET_STUDENTS'
export const UPDATE_STUDENT = 'UPDATE_STUDENT'
export const DELETE_STUDENT = 'DELETE_STUDENT'
export const GET_STUDENT = 'GET_STUDENT'

export const getStudent = (StudentId) => (dispatch, getState) => {
   
  request
    .get(`${baseUrl}/students/${StudentId}`)
    .then(response => {
      dispatch({
        type: GET_STUDENT,
        payload: response.body
      })})
    .catch(err => console.log(err))
  
  }

  export const updateStudent = (StudentId, updates) => (dispatch) => {

    request
    .put(`${baseUrl}/students/${StudentId}`)
    .send(updates)
    .then(response => {
      dispatch({
        type: UPDATE_STUDENT,
        payload: response.body
      })})
    .catch(err => console.log(err))
}
  
  export const getStudents = (batchId) => (dispatch, getState) => {

    request
      .get(`${baseUrl}/batches/${batchId}/students`)
      .then(response => dispatch({
          type: GET_STUDENTS,
          payload: response.body
      }))
      .catch(err => console.error(err))
  }

  export const addStudent = (student) => (dispatch, getState) => {
    
    request
      .post(`${baseUrl}/batches/${student.batchId}/students`)
      .send(student)
      .then(response => dispatch({
          type: ADD_STUDENT,
          payload: student
      }))
      .catch(err => console.error(err))
  }

  export const deleteStudent = (studentId) => (dispatch, getState) => {

    request
    .delete(`${baseUrl}/students/${studentId}`)
    .then(response => dispatch({
      type: DELETE_STUDENT,
      payload: response.body
    }))
  }
