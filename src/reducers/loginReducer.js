function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    user: {}
  },
  action
) {
  switch (action.type) {
    case 'INVALIDATE_SUBREDDIT':
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case 'RECEIVE_POSTS':
      return Object.assign({}, state, {
        user: action.data,
        isFetching: false,
        didInvalidate: false,
      })
    default:
      return state
  }
}

export default function loginReducer(state = {}, action) {
  switch (action.type) {
    case 'INVALIDATE_SUBREDDIT':
    case 'RECEIVE_POSTS':
    case 'REQUEST_POSTS':
      return Object.assign({}, state, {
        ["response"]: posts(state[action.data], action)
      })
    default:
      return state
  }
}