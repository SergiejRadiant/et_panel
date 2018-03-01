import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import { reducer as burgerMenu } from 'redux-burger-menu'
import driversReducer from './driversReducer'
import adminOrdersReducer from './adminOrdersReducer'
import driverOrdersReducer from './driverOrdersReducer'
import loginReducer from './loginReducer'


const reducer = combineReducers({
    routing: routerReducer,
    burgerMenu,
    driversReducer,
    adminOrdersReducer,
    driverOrdersReducer,
    loginReducer,
})

export default reducer