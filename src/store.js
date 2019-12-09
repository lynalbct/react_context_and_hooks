import React from 'react'

import { MovieStoreProvider } from './container/Movies/redux/Reducer'
import { HolidayReducer } from './container/Holidays/redux/Reducer'

export const Store = React.createContext()

export function StoreProvider (props) {
  const value = {
      movieStore: MovieStoreProvider(),
      holidays: HolidayReducer()
  }
  return (
    <Store.Provider
      value={value}>
      {props.children}
    </Store.Provider>
  )
}