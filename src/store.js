import React from 'react'

import MovieStoreProvider from './container/Movies/redux/Reducer'

export const Store = React.createContext()

export function StoreProvider (props) {
    const { state, dispatch } = MovieStoreProvider
    const value = { state, dispatch }
    
    return (
      <Store.Provider
        value={value}>
        {props.children}
      </Store.Provider>
    )
  }