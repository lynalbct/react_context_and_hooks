import React from 'react'

const initialState = {
  details: {},
  isUpdating: false,
  movies: [
    {
      id: 1,
      movieTitle: 'The Good Place',
      movieDuration: '2:45:00'
    },
    {
      id: 2,
      movieTitle: 'Brooklyn Nine-Nine',
      movieDuration: '2:45:00'
    },
    {
      id: 3,
      movieTitle: 'Rick and Morty',
      movieDuration: '2:45:00'
    }
  ]
}
 
function reducer (state, action) {
  switch (action.type) {
    case 'ADD_MOVIE':
      action.data.id = state.movies[state.movies.length + 1]
      return {
        ...state,
        movies: [...state.movies, action.data]
      }

    case 'FETCH_MOVIE':
      return {
        ...state,
        movies: [...state.movies]
      }

    case 'TO_UPDATE_MOVIE_DETAILS':
      const { data } = action
      // let updatedMovies = [].concat(state.movies || [])
      const movie = state.movies.find(item => item.id === data.id)
      return {
        ...state,
        details: movie,
        isUpdating: true
      }
      
    case 'UPDATE_MOVIE_DETAILS':
      action.data.id = state.details.id
      const idx = state.movies.findIndex(item => item.id === state.details.id)
      let updatedMovies
      if (idx !== -1) {
        updatedMovies = [
          ...state.movies.slice(0, idx), 
          action.data,
          ...state.movies.slice(idx + 1)
        ]
      }
      return Object.assign({}, state, {
          movies: updatedMovies,
          isUpdating: false,
          details: {}
        })
    
    case 'DELETE_MOVIE':
      const movieId = state.movies.findIndex(item => item.id === action.id)
      let updatedList 
      if (movieId !== -1) {
        updatedList = [
          ...state.movies.slice(0, movieId),
          ...state.movies.slice(movieId+1)
        ]
      }
      return Object.assign({}, state, {
        movies: updatedList
      })


    default:
      return state
  }
}

export const ChannelStoreProvider = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)
    
  return { state, dispatch }
}
