import React from 'react'
import { reducer } from './Reducer'

export const Store = React.createContext()

const initialState = {
  episodes: [],
  favourites: [],
  movies: []
}

const totdoInitialState = {
  todos: []
}

function todoReducer(state, action) {
  switch (action.type) {
    case '1': 
    return {
      ...state, todos: action.payload
    }

    default:
      return state

  }
}

export function StoreProvider (props) {
  const [state, dispatch] = React.useReducer(reducer, initialState)
  const [todostate, todoDsipatch] = React.useReducer(todoReducer, totdoInitialState)
  const value = { 
    moviesReducer: {state, dispatch},
    todoReducer: {todostate, todoDsipatch}
   }
  const todoValue = { todostate, todoDsipatch}
  return (
    <Store.Provider
      value={value}>
      {props.children}
    </Store.Provider>
  )
}