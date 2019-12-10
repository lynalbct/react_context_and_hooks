export const saveMovie = (dispatch, data) => {
  return dispatch({
    type: 'ADD_MOVIE',
    data
  })
}

export const fetchMovies = (dispatch) => {
  return dispatch({
    type: 'FETCH_MOVIES'
  })
}

export const toUpdateDetails = (dispatch, data) => {
  return dispatch({
    type: 'TO_UPDATE_MOVIE_DETAILS',
    data
  })
}

export const updateMovieDetails = (dispatch, data) => {
  return dispatch({
    type: 'UPDATE_MOVIE_DETAILS',
    data
  })
}

export const deleteMovie = (dispatch, id) => {
  return dispatch({
    type: 'DELETE_MOVIE',
    id
  })
}