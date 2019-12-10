import React from 'react'

import { MovieStoreProvider } from './container/Movies/redux/Reducer'
import { ChannelStoreProvider } from './container/Channels/redux/Reducer'

export const Store = React.createContext()

export function StoreProvider (props) {

  const value = { 
    movieReducer: MovieStoreProvider(),
    channelReducer: ChannelStoreProvider()
  }
  return (
    <Store.Provider
      value={value}>
      {props.children}
    </Store.Provider>
  )
}