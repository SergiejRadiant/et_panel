import { RSAA } from 'redux-api-middleware'

export const LOGIN_REQUEST = '@@auth/LOGIN_REQUEST'
export const LOGIN_SUCCESS = '@@auth/LOGIN_SUCCESS'
export const LOGIN_FAILURE = '@@auth/LOGIN_FAILURE'
export const TOKEN_REQUEST = '@@auth/TOKEN_REQUEST'
export const TOKEN_RECEIVED = '@@auth/TOKEN_RECEIVED'
export const TOKEN_FAILURE = '@@auth/TOKEN_FAILURE'


export const login = (data) => ({
  [RSAA]: {
    endpoint: 'http://89.223.28.252:8000/ru/ext_api/v0/api-token-auth/',
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
    types: [
      LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE
    ]
  }
})

export const refreshAccessToken = (token) => ({
  [RSAA]: {
    endpoint: 'http://89.223.28.252:8000/ru/ext_api/v0/api-token-refresh/',
    method: 'POST',
    body: JSON.stringify({ refresh: token }),
    headers: { 'Content-Type': 'application/json' },
    types: [
      TOKEN_REQUEST, TOKEN_RECEIVED, TOKEN_FAILURE
    ]
  }
})