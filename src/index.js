import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'

import { StoreProvider } from './container/Movies/redux/Store'

import './styles/index.css'
import App from './container/Movies/App'
import FavPage from './container/Movies/FavePage'
import HomePage from './container/Movies/HomePage'

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path='/'>
        <HomePage path='/' />
        <FavPage path='/faves' />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
)