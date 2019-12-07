import React from 'react'

const initialState = {
  episodes: [],
  favourites: [],
  movies: []
}

function reducer (state, action) {
  switch (action.type) {
    case 'FETCH_DATA':
      return { 
        ...state, episodes: action.payload 
      }

    case 'FETCH_MOVIES':
      return { 
        ...state, movies: action.data
      }

    case 'ADD_FAV':
      return {
        ...state,
        favourites: [...state.favourites, action.payload]
      }

    case 'REMOVE_FAV':
      return {
        ...state,
        favourites: action.payload
      }

    default:
      return state
  }
}

export default function MovieStoreProvider () {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  // console.log('state: ', state)
  // const test = data.reduce((acc, obj) => {
  //   console.log('obj: ', obj)
  // }, {})

  return { state, dispatch }
}
