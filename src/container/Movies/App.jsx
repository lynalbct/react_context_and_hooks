import React from 'react'
import { Store } from '../../store'
import { Link } from '@reach/router'

export default function App(props) {

  // const contextTest = React.useContext(Store);
  // console.log('---->>> Context: ', contextTest)
  
  return (
    <React.Fragment>
      <header className='header'>
        <div>
          <h1>The Good Place</h1>
          <p>Pick your favourite episodes</p>
        </div>
        <div>
        <Link to='/movies'>Movies</Link>{'   '}
        <Link to='/'>Home</Link>{'   '}
        {/* <Link to='/faves'>Favourite(s) {state.favourites.length}</Link> */}
        </div>
      </header>
      {props.children}
    </React.Fragment>
  )
}
