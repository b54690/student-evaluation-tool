import * as request from 'superagent'
import {baseUrl} from '../constants'
// import {logout} from './users'
import {isExpired} from '../jwt'

export const ADD_EVALUATION = 'ADD_EVALUATION'
export const GET_EVALUATIONS = 'GET_EVALUATIONS'


export const createEvaluation = (evaluation) => (dispatch, getState) => {
    // const state = getState()
    // const jwt = state.currentUser.jwt

    // if (isExpired(jwt)) return dispatch(logout())
    
    request
    .post(`${baseUrl}/students/${evaluation.studentId}/evaluations`)
    // .set('Authorization', `Bearer ${jwt}`)
    .send(evaluation)
      .then(response => dispatch({
          type: ADD_EVALUATION,
          payload: evaluation
      }))
      .catch(err => console.error(err))
  }

  export const getEvaluations = (studentId) => (dispatch, getState) => {
    // const state = getState()
    // const jwt = state.currentUser.jwt
  
    request
      .get(`${baseUrl}/students/${studentId}/evaluations`)
    //   .set('Authorization', `Bearer ${jwt}`)
      .then(response => {
        dispatch({
          type: GET_EVALUATIONS,
          payload: response.body
        })
      })
      .catch(err => console.error(err))
  }

