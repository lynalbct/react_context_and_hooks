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

  const viewMovieDetails = movie => {
    action.fetchMovieDetails(moviesReducer.dispatch, movie._links.self.href)
  }

  return (
    <div className='episode-layout'>
      {props.movies.map(movie => {
        return (
          <section key={movie.id}  className='episode-box'>
            <img
              src={movie.image ? movie.image.medium : 'pic.png'}
              alt={`${movie.name}`}
            />
            <section style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>{movie.name}</div>
              <button type='button' onClick={() => viewMovieDetails(movie)}>
                Read more...
              </button>
            </section>
          </section>
        )
      })}
    </div>
  )
}
