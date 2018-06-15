import * as request from 'superagent'
import {baseUrl} from '../constants'
import {isExpired} from '../jwt'

export const ADD_EVALUATION = 'ADD_EVALUATION'

export const addEvaluation = (evaluation) => (dispatch, getState) => {
    
    request
    .post(`${baseUrl}/students/${evaluation.studentId}/evaluations`)
    .send(evaluation)
      .then(response => dispatch({
          type: ADD_EVALUATION,
          payload: evaluation
      }))
      .catch(err => console.error(err))
  }


