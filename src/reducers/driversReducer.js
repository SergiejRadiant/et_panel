import * as drivers from '../actions/drivers'

const initialState = {
  drivers: {},
  errors: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case drivers.RETRIEVE_DRIVERS_SUCCESS:
      return {
        drivers: action.payload,
        errors: {}
      }
    case drivers.RETRIEVE_DRIVERS_REQUEST:
      return {
        drivers: {},
        errors: {}
      }
    case drivers.RETRIEVE_DRIVERS_FAILURE:
      return {
        drivers: {},
        errors: {}
      }
    case drivers.REGISTER_DRIVERS_SUCCESS:
      return {
        message: 'Driver is succesfully registered!'
      }
    case drivers.REGISTER_DRIVERS_REQUEST:
      return {
        message: '...'
      }
    case drivers.REGISTER_DRIVERS_FAILURE:
      return {
        message: 'Driver was not registered!',
        errors: {}
      }
    default:
      return state
  }
}