// import React from 'react'
// import { Store } from '../../store'

// const EpisodeList = React.lazy(() => import('./EpisodeList'))

// export default function HomePage() {
//   const { moviesReducer: { state } } = React.useContext(Store)
  
//   const props = {
//     episodes: state.episodes,
//     favourites: state.favourites
//   }

//   return (
//     <React.Fragment>
//       <React.Suspense fallback={<div>Loading...</div>}>
//         <section className='episode-layout'>
//           <EpisodeList {...props}/>
//         </section>
//       </React.Suspense>
//     </React.Fragment>
//   )
// }
