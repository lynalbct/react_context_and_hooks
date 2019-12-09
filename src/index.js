import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from '@reach/router'

// import { StoreProvider } from './container/Movies/redux/Store'

import { StoreProvider } from './store'
import './styles/index.css'
import App from './container/Movies/App'
import HomePage from './container/Movies/HomePage'
import HolidayPage from './container/Holidays'

ReactDOM.render(
  <StoreProvider>
    <Router>
      <App path='/'>
        <HomePage path='/' />
        <HolidayPage path='/holidays' />
      </App>
    </Router>
  </StoreProvider>,
  document.getElementById("root")
)