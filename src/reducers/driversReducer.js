const driversState = [
  {
    "user": {
      "first_name": "Devonte",
      "last_name": "Connelly",
      "username": "Ari24",
      "password": "Ari24",
      "is_authenticated": true,
      "last_vizit": "26.02.18"
    },
    "car": "sdf",
    "car_number": "sdf"
  },
  {
    "user": {
      "first_name": "Dorris",
      "last_name": "Weber",
      "username": "Vivienne.Goyette53",
      "password": "Vivienne.Goyette53",
      "is_authenticated": true,
      "last_vizit": "26.02.18"
    },
    "car": "sdf",
    "car_number": "sdf"
  },
  {
    "user": {
      "first_name": "Reese",
      "last_name": "Larson",
      "username": "Leta.Ryan",
      "password": "Leta.Ryan",
      "is_authenticated": false,
      "last_vizit": "26.02.18"
    },
    "car": "sdf",
    "car_number": "sdf"
  },
  {
    "user": {
      "first_name": "Jena",
      "last_name": "Gerhold",
      "username": "Billie.Kuhn",
      "password": "Billie.Kuhn",
      "is_authenticated": true,
      "last_vizit": "26.02.18"
    },
    "car": "sdf",
    "car_number": "sdf"
  },
]

const driversReducer = (state = driversState, action) => {
  switch (action.type) {
    case 'NEW_DRIVER':
      return state.concat({
        "user": {
          "first_name": action.firstName,
          "last_name": action.lastName,
          "username": action.username,
          "password": action.password,
          "is_authenticated": false,
          "last_vizit": ""
        },
        "car": action.car,
        "car_number": action.carNumber
      })
    
    default:
      return state
  } 

  return state
}

export default driversReducer