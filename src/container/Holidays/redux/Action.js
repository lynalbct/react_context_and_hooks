export const fetchHolidays = async (dispatch) => {
  const data = await fetch('http://api.tvmaze.com/shows');
  const dataJSON = await data.json();
  return dispatch({
    type: 'HOLIDAYS_FETCH_SUCCESS',
    data: dataJSON
  })
}

export const addHolidayDetails = (item, dispatch) => {
  return dispatch({
    type: 'HOLIDAYS_ADD_DETAILS',
    item
  })
}

export const updateHolidayDetails = (item, dispatch) => {
  return dispatch({
    type: 'HOLIDAYS_UPDATE_DETAILS',
    item,
    visible: false
  })
}

export const showHolidayModal = ({ item = null, visible, dispatch }) => {
  return dispatch({
    type: 'HOLIDAYS_MODAL_VISIBLE',
    item,
    visible
  })
}
