// import React from 'react'
// import { Store } from '../../store'

// const EpisodeList = React.lazy(() => import('./EpisodeList'))

// export default function FavPage() {
//   const { moviesReducer: { state } } = React.useContext(Store)

//   const props = {
//     episodes: state.favourites,
//     favourites: state.favourites
//   }
  
//   return (
//     <React.Suspense fallback={<div>Loading...</div>}>
//       <div className='episode-layout'>
//         <EpisodeList {...props}/>
//       </div>
//     </React.Suspense>
//   )
// }