import * as request from 'superagent'
import {baseUrl} from '../constants'
// import {logout} from './teachers'
// import {isExpired} from '../jwt'

export const ADD_BATCH = 'ADD_BATCH'
export const GET_BATCH = 'GET_BATCH'
export const GET_BATCHES = 'GET_BATCHES'
export const UPDATE_BATCH_SUCCESS = 'UPDATE_BATCH_SUCCESS'
export const UPDATE_BATCHES = 'UPDATE_BATCHES'


export const addBatch = (data) => (dispatch, getState) => {
    // const state = getState()
    // const jwt = state.currentUser.jwt

    // if (isExpired(jwt)) return dispatch(logout())

    request
      .post(`${baseUrl}/batches`)
      // .set('Authorization', `Bearer ${jwt}`)
      .send(data)
      .then(response => dispatch({
          type: ADD_BATCH,
          payload: response.body
      }))
      .catch(err => console.error(err))
  }

  export const getBatch = (batchId) => (dispatch, getState) => {
    // const state = getState()
    // const jwt = state.currentUser.jwt
  
    request
      .get(`${baseUrl}/batches/${batchId}`)
    //   .set('Authorization', `Bearer ${jwt}`)
      .then(response => {
        dispatch({
          type: GET_BATCH,
          payload: response.body
        })
      })
      .catch(err => console.log(err))
  }  


  export const getBatches = () => (dispatch, getState) => {
    // const state = getState()
    // const jwt = state.currentUser.jwt
  
    request
      .get(`${baseUrl}/batches`)
    //   .set('Authorization', `Bearer ${jwt}`)
      .then(response => {

        dispatch({
          type: GET_BATCHES,
          payload: response.body
        })
        console.log(response)
      })
      .catch(err => console.error(err))
  }


  
  

