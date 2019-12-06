
export const fetchDataAction = async (dispatch) => {
    const data = await fetch(
      'https://api.tvmaze.com/singlesearch/shows?q=himym&embed=episodes'
    );
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON._embedded.episodes
    })
  }