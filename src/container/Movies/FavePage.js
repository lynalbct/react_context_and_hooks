import React from 'react'
import { Store } from '../../store'

const EpisodeList = React.lazy(() => import('./EpisodeList'))

export default function FavPage() {
  const { movieReducer } = React.useContext(Store)

  const props = {
    episodes: movieReducer.state.favourites,
    favourites: movieReducer.state.favourites
  }
  
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className='episode-layout'>
        <EpisodeList {...props}/>
      </div>
    </React.Suspense>
  )
}