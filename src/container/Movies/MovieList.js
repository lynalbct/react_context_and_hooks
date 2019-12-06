import React from 'react';

import { Store } from './redux/Store'
import * as action from './redux/Action'

export function MovieList () {
const { moviesReducer } = React.useContext(Store)
const props = {
    movies: moviesReducer.state.movies
}

React.useEffect(() => {
  moviesReducer.state.movies.length === 0 && action.fetchMovieList(moviesReducer.dispatch) 
  })

  return props.movies.map(movie => {
    return (
    <section key={movie.id}  className='episode-layout'>
      <section className='episode-box'>
        <img
          src={movie.image ? movie.image.medium : 'pic.png'}
          alt={`${movie.name}`}
        />
        <div>{movie.name}</div>
        <section>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          </div>
        </section>
      </section>
    </section>
    )
  })
}