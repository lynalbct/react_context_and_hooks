import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'

import { StoreProvider } from './store'
import './styles/index.css'
import App from './App'
import FavPage from './container/Movies/FavePage'
import HomePage from './container/Movies/HomePage'
import Channels from './container/Channels/index'

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path='/'>
        <HomePage path='/' />
        <FavPage path='/faves' /> 
        <Channels path='/channels' />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
)