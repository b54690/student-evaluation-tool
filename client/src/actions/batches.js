import * as request from 'superagent'
import {baseUrl} from '../constants'

export const ADD_BATCH = 'ADD_BATCH'
export const GET_BATCH = 'GET_BATCH'
export const GET_BATCHES = 'GET_BATCHES'


export const addBatch = (data) => (dispatch, getState) => {

    request
      .post(`${baseUrl}/batches`)
      .send(data)
      .then(response => dispatch({
          type: ADD_BATCH,
          payload: response.body
      }))
      .catch(err => console.error(err))
  }

  export const getBatch = (batchId) => (dispatch, getState) => {
  
    request
      .get(`${baseUrl}/batches/${batchId}`)
      .then(response => {
        dispatch({
          type: GET_BATCH,
          payload: response.body
        })
      })
      .catch(err => console.log(err))
  }  


  export const getBatches = () => (dispatch, getState) => {

    request
      .get(`${baseUrl}/batches`)
      .then(response => {

        dispatch({
          type: GET_BATCHES,
          payload: response.body
        })
        console.log(response)
      })
      .catch(err => console.error(err))
  }


  
  

