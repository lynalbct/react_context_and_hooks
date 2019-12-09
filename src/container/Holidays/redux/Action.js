
// const token = 'd2875183cda2f714910fea907876719557e447a1260b6b16acf85de01a552c6c'
export const fetchHolidays = async (dispatch) => {
  const data = await fetch('http://api.tvmaze.com/shows');
  const dataJSON = await data.json();
  return dispatch({
    type: 'HOLIDAYS_FETCH_SUCCESS',
    data: dataJSON
  })
}

export const addHoliday = (data) => {
  console.log('--> addHoliday:', data)
}

export const updateHolidayDetails = (item, dispatch) => {
  return dispatch({
    type: 'HOLIDAYS_UPDATE_DETAILS',
    item
  })
}

export const showHolidayModal = ({ item, visible, dispatch }) => {
  return dispatch({
    type: 'HOLIDAYS_MODAL_VISIBLE',
    item,
    visible
  })
}
