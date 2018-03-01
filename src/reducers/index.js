import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as burgerMenu } from 'redux-burger-menu'
import driversReducer from './driversReducer'
import adminOrdersReducer from './adminOrdersReducer'
import driverOrdersReducer from './driverOrdersReducer'
import auth, * as fromAuth from './auth.js'


const rootReducer = combineReducers({
    auth: auth,
    router: routerReducer,
    burgerMenu,
    driversReducer,
    adminOrdersReducer,
    driverOrdersReducer,
})

export const isAuthenticated =
    state => fromAuth.isAuthenticated(state.auth)
export const accessToken =
    state => fromAuth.accessToken(state.auth)
export const isAccessTokenExpired =
    state => fromAuth.isAccessTokenExpired(state.auth)
export const refreshToken =
    state => fromAuth.refreshToken(state.auth)
export const isRefreshTokenExpired =
    state => fromAuth.isRefreshTokenExpired(state.auth)
export const authErrors =
    state => fromAuth.errors(state.auth)

export default rootReducer