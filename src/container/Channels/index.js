import React, { useState, useEffect, useRef } from 'react'
import Box from '@material-ui/core/Box'

import { Store } from '../../store'
import * as action from './redux/Action'

export default function Channels() {
  const { channelReducer : {state, dispatch} } = React.useContext(Store)    
  
  const handleInputChange = (e) => {
    e && e.preventDefault()
    const {name, value} = e.target
      setValues({
        ...values,
        [name]: value
      })
  }

  const onAddMovie = (e) => {
    e && e.preventDefault()
    const {movieTitle, movieDuration} = values
    if(!movieTitle || !movieDuration) return
    if (state.isUpdating) 
      {
        action.updateMovieDetails(dispatch, values)
      }
    else {
      action.saveMovie(dispatch, values)
    }
  }

  const onUpdateMovie = (movie) => {
    const {movieTitle, movieDuration} = movie
    if (!movieTitle || !movieDuration) return
    action.toUpdateDetails(dispatch, movie)
  }
  
  const onDeleteMovie = (id) => {
    if (!id) return
    action.deleteMovie(dispatch, id)
  }

  const [values, setValues] = useState({
    movieTitle: (state.isUpdating && state.details.movieTitle) || '',
    movieDuration: (state.isUpdating && state.details.movieDuration) || ''
  })

  const movieTitleInput = useRef(values.movieTitle)
  const movieDurationInput = useRef(values.movieDuration)

  useEffect(() => {
    state.movies.length === 0 && action.fetchMovies(dispatch)
  })

  return (
    <React.Fragment>
      <React.Suspense>
        <Box >
          <div className='form-container'>
            <h3>Add movie</h3>
            <form >
              <label>Movie Name:</label>
              <input
                name='movieTitle'
                defaultValue={state.isUpdating ? state.details.movieTitle : movieTitleInput.current}
                ref={movieTitleInput}
                onChange={handleInputChange}>
              </input><br /><br/>
              <label>Movie Length:</label>
              <input
                name='movieDuration'
                defaultValue={state.isUpdating ? state.details.movieDuration : movieDurationInput.current}
                ref={movieDurationInput}
                onChange={handleInputChange}>
                </input> <br /><br/>
              <button className='btn-success' onClick={onAddMovie}>Submit</button>
            </form>
          </div>
          <h2 style={{'padding': '20px'}}>Movies</h2>
          <div className='movie-container'><br />
            {state.movies.length > 0 
              ?
              state.movies.map((movie, index) => {
                return (
                  <div key={index} className='border-bottom'>
                    <button style={{'color': 'blue'}} onClick={() => onUpdateMovie(movie)}>Edit</button>
                    <button style={{'color': 'red'}} onClick={() => onDeleteMovie(movie.id)}>Delete</button>
                    <h5>Title: {movie.movieTitle}</h5>
                    <h5>Duration: {movie.movieDuration}</h5>
                  </div>
                )
              })
            : null
            }
          </div>
        </Box>
      </React.Suspense>
    </React.Fragment>
  )
}