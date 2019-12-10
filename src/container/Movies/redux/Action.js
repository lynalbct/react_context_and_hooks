
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

export const getClients = async (dispatch) => {
  const url= 'http://localhost:8000/api/v1/timetracker/clients/'
  const token = '39bf4b91f99e77f934197c2db0c92b6fd10a80874294b57e790e8f4d51d7dce4'
  const data = await fetch(url, {
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      Authorization: `Token ${token}`,
      
    }
  })
  const dataJSON = await data
  return dispatch({
      type: 'FETCH_CLIENTS',
      data: dataJSON
    })
    

}