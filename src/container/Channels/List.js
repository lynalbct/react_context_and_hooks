import React from 'react'
import { Store } from '../../store'
import * as action from './redux/Action'

export default function List(props) {
  const { channelReducer : {state, dispatch} } = React.useContext(Store)

  const toggleFavAction = episode => {
    const episodeInFavourites = state.favourites.includes(episode)
    let dispatchObj = {
      type: 'ADD_FAV',
      payload: episode
    }
    if (episodeInFavourites) {
      const favouritesWithoutEpisode = state.favourites.filter(
        fav => fav.id !== episode.id
      );
      dispatchObj = {
        type: 'REMOVE_FAV',
        payload: favouritesWithoutEpisode
      }
    }
    return dispatch(dispatchObj)
  }

  React.useEffect(() => {
    state.episodes.length === 0 && action.fetchDataAction(dispatch) 
  })

  return props.episodes.map(episode => {
    return (
      <section key={episode.id} className='episode-box'>
        <img
          src={episode.image ? episode.image.medium : 'pic.png'}
          alt={`Rick and Morty ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            Season: {episode.season} Number: {episode.number}
          </div>
          <button type='button' onClick={() => toggleFavAction(episode)}>
            {props.favourites.find(fav => fav.id === episode.id) ? 'Unfav' : 'Fav'}
          </button>
        </section>
      </section>
    )
  })
}
