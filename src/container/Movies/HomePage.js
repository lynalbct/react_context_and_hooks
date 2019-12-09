import React from 'react'
import { Store } from '../../store'

const EpisodeList = React.lazy(() => import('./EpisodeList'))

export default function HomePage() {
  const { movieStore } = React.useContext(Store)

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className='episode-layout'>
          Movies Here
        </section>
      </React.Suspense>
    </React.Fragment>
  )
}
