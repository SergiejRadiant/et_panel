import { RSAA } from 'redux-api-middleware';
import { withAuth } from '../reducers/index'

export const RETRIEVE_DRIVERS_REQUEST = '@@retrieveDrivers/RETRIEVE_DRIVERS_REQUEST';
export const RETRIEVE_DRIVERS_SUCCESS = '@@retrieveDrivers/RETRIEVE_DRIVERS_SUCCESS';
export const RETRIEVE_DRIVERS_FAILURE = '@@retrieveDrivers/RETRIEVE_DRIVERS_FAILURE';

export const retrieveDrivers = () => ({
  [RSAA]: {
    endpoint: 'http://89.223.28.252:8000/ru/ext_api/v0/drivers/',
    method: 'GET',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    types: [
      RETRIEVE_DRIVERS_REQUEST, RETRIEVE_DRIVERS_SUCCESS, RETRIEVE_DRIVERS_FAILURE
    ]
  }
})

export const REGISTER_DRIVERS_REQUEST = '@@registerDrivers/REGISTER_DRIVERS_REQUEST';
export const REGISTER_DRIVERS_SUCCESS = '@@registerDrivers/REGISTER_DRIVERS_SUCCESS';
export const REGISTER_DRIVERS_FAILURE = '@@registerDrivers/REGISTER_DRIVERS_FAILURE';

export const registerDriver = (data) => ({
  [RSAA]: {
    endpoint: 'http://89.223.28.252:8000/ru/ext_api/v0/drivers/',
    method: 'POST',
    headers: withAuth({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(data),
    types: [
      REGISTER_DRIVERS_REQUEST, REGISTER_DRIVERS_SUCCESS, REGISTER_DRIVERS_FAILURE
    ]
  }
})