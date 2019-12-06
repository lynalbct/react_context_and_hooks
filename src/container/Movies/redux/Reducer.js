
export function reducer (state, action) {
  switch (action.type) {
    case 'FETCH_DATA':
    return { ...state, episodes: action.payload 
    }

    case 'FETCH_MOVIES':
      return { ...state, movies: action.data
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
    
    case 'tryCombine':
    return newReducer(state, action)

    default:
    return state
  }
}

export function newReducer (state, action) {
  switch (action.type) {
    case '1':
    return {
      ...state
    }
    default:
    return state
  }
}