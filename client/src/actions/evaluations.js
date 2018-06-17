import * as request from 'superagent'
import {baseUrl} from '../constants'
import {isExpired} from '../jwt'

export const ADD_EVALUATION = 'ADD_EVALUATION'
export const GET_EVALUATIONS = 'GET_EVALUATIONS'
export const LATEST_EVALUATION = 'LATEST_EVALUATION'

export const addEvaluation = (evaluation, studentId, update) => (dispatch, getState) => {
    
    request
    .post(`${baseUrl}/students/${evaluation.studentId}/evaluations`)
    .send(evaluation)
      .then(response => dispatch({
          type: ADD_EVALUATION,
          payload: evaluation
      }))
      .catch(err => console.error(err))
  }

  export const getEvaluations = (studentId) => (dispatch) => {

  
    request
      .get(`${baseUrl}/students/${studentId}/evaluations`)
      .then(response => {
        dispatch({
          type: GET_EVALUATIONS,
          payload: response.body
        })
      })
      .catch(err => console.error(err))
    }


    export const latestEvaluation = (studentId, update) => (dispatch) => {

        request
          .put(`${baseUrl}/students/${studentId}`)
          .send({latestEvaluation: update.Evaluation})
          .then(response => {
            dispatch({
              type: LATEST_EVALUATION,
              payload: response.Evaluation
            })
          })
          .catch(err => console.error(err))
  }



