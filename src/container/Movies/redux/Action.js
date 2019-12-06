
export const fetchDataAction = async (dispatch) => {
  const data = await fetch(
    'https://api.tvmaze.com/singlesearch/shows?q=the-good-place&embed=episodes'
  );
  const dataJSON = await data.json();
  return dispatch({
    type: 'FETCH_DATA',
    payload: dataJSON._embedded.episodes
  })
}

export const fetchMovieList = async (dispatch) => {
  const data = await fetch(
    'https://api.tvmaze.com/shows'
  );
  const dataJSON = await data.json()
  return dispatch({
    type: 'FETCH_MOVIES',
    data: dataJSON
  })
}

export const fetchMovieDetails = async (dispatch, url) => {
  const data = await fetch(url)
  const dataJSON = await data.json()
  return dispatch({
    type: 'FETCH_MOVIE_DETAILS',
    data: dataJSON
  })
}