import constants from '../constants/index'
import fetch from 'cross-fetch'


export function selectSubreddit(url) {
  return {
    type: constants.SELECT_SUBREDDIT,
    url
  }
}

export function invalidateSubreddit(url) {
  return {
    type: constants.INVALIDATE_SUBREDDIT,
    url
  }
}

export function requestPosts(url) {
  return {
    type: constants.REQUEST_POSTS,
    url
  }
}

export function receivePosts(json) {
  return {
    type: constants.RECEIVE_POSTS,
    data: json
  }
}

export function fetchPosts(url, data) {

  return function (dispatch) {
    dispatch(requestPosts(url))

    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(
        response => response.json(),
        error => console.log('An error occurred.', error)
      )
      .then(json =>
        dispatch(receivePosts(json))
      )
  }
}

export function shouldFetchPosts(state, url) {
  const posts = state.postsBySubreddit[url]
  if (!posts) {
    return true
  } else if (posts.isFetching) {
    return false
  } else {
    return posts.didInvalidate
  }
}

export function fetchPostsIfNeeded(url) {
  return (dispatch, getState) => {
    if (shouldFetchPosts(getState(), url)) {
      // Dispatch a thunk from thunk!
      return dispatch(fetchPosts(url))
    } else {
      // Let the calling code know there's nothing to wait for.
      return Promise.resolve()
    }
  }
}

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