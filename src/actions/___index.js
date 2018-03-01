import constants from '../constants/index'

export const newDriver = (
  firstName, 
  lastName, 
  username, 
  password, 
  car,
  carNumber
) => {
  return {
    type: constants.NEW_DRIVER,
    firstName,
    lastName,
    username,
    password,
    car,
    carNumber
  }
}