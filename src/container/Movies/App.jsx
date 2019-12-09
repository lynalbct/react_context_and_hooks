import React from 'react'
import { Store } from '../../store'
import { Link } from '@reach/router'

// Token
// d2875183cda2f714910fea907876719557e447a1260b6b16acf85de01a552c6c

export default function App(props) {  
  const { movieStore } = React.useContext(Store)
  
  return (
    <React.Fragment>
      <header className='header'>
        <div>
          <h1>The Good Place</h1>
          <p>Pick your favourite episodes</p>
        </div>
        <div>
        <Link to='/'>Home</Link>{'   '}
        <Link to='/holidays'>Holidays</Link>{'   '}
        <Link to='/movies'>Movies</Link>{'   '}
        </div>
      </header>
      {props.children}
    </React.Fragment>
  )
}
