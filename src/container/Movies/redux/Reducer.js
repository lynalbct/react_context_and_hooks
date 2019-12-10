import React from 'react'

const initialState = {
  episodes: [],
  favourites: []
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

    case 'FETCH_CLIENTS':
      return {
        ...state,
        clients: action.data
      }

    default:
      return state
  }
}

export const MovieStoreProvider = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  return { state, dispatch }
}
