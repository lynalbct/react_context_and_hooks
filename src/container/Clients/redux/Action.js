export function getClients  (dispatch, page = null, keyword = null, ordering = null) {
    const url= 'http://localhost:8000/api/v1/timetracker/clients/'
    const token = '39bf4b91f99e77f934197c2db0c92b6fd10a80874294b57e790e8f4d51d7dce4'
    return fetch(url, {
        credentials: 'include',
        headers: {
            Accept: 'application/json',
            Authorization: `Token ${token}`
        }
    })
    .then((response) => {
        return dispatch({
            type: 'FETCH_CHANNEL_DETAILS',
            data: response
          })
    
    })
  }