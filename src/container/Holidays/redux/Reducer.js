import React from 'react'

const initialState = {
  isUpdatingHoliday: false,
  visible: false,
  details: {},
  data: [
    {
      id: 1,
      name: 'Christmas',
      date: '2019-12-25'
    },
    {
      id: 2,
      name: 'Rizal day',
      date: '2019-12-30'
    },
    {
      id: 3,
      name: 'Lazy day',
      date: '2019-12-10'
    }
  ]
}

function reducer (state, action) {
  switch (action.type) {
    case 'HOLIDAYS_FETCH_SUCCESS':
      return {
        ...state,
        data: action.data
      }
    
    case 'HOLIDAYS_ADD_DETAILS':
      const newItem = action.item
      const lastId = Math.max(state.data.map(c => c.id))
      newItem.id = lastId+1
      const newData = [ ...state.data, newItem]
      return {
        ...state,
        visible: false,
        data: newData
      }
    
    case 'HOLIDAYS_UPDATE_DETAILS':
      let { item, visible } = action
      const idx = state.data.findIndex(c => c.id === item.id)
      let data = state.data || []
      // Dispatch
      if (idx !== -1) {
        data = [
          ...state.data.slice(0, idx), 
          item,
          ...state.data.slice(idx + 1)
        ]
      }
      return {
        ...state,
        data,
        visible
      }
    
    case 'HOLIDAYS_MODAL_VISIBLE':
      return {
        ...state,
        details: action.item,
        visible: action.visible
      }

    default:
      return state
  }
}

export const HolidayReducer = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return { state, dispatch }
}
