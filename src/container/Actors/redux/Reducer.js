import React from 'react'

const initialState = {
  data: [
    {
      name: 'Chris Evans',
      age: 34
    },
    {
      name: 'Tom Ellis',
      age: 36
    },
    {
      name: 'Lauren German',
      age: 30
    },
    {
      name: ''
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

    default:
      return state
  }
}

export const HolidayReducer = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  return { state, dispatch }
}
