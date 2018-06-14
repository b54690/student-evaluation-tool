import * as request from 'superagent'
import {baseUrl} from '../constants'
// import {logout} from './users'
import {isExpired} from '../jwt'

export const ADD_EVALUATION = 'ADD_EVALUATION'
export const GET_EVALUATIONS = 'GET_EVALUATIONS'


export const addEvaluation = (evaluation) => (dispatch, getState) => {
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


