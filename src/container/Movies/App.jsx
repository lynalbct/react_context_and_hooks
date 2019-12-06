import React from 'react'
import { Store } from './redux/Store'
import { Link } from '@reach/router'

export default function App(props) {

  const { state } = React.useContext(Store);

  return (
    <React.Fragment>
      <header className='header'>
        <div>
          <h1>How I Met Your Mother</h1>
          <p>Pick your favourite episodes</p>
        </div>
        <div>
        <Link to='/'>Home</Link>{'   '}
        <Link to='/faves'>Favourite(s) {state.favourites.length}</Link>
        </div>
      </header>
      {props.children}
    </React.Fragment>
  )
}
