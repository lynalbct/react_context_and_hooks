import React from 'react'
import { Button } from '@material-ui/core'
import { Delete, Edit } from '@material-ui/icons/'
import { Store } from '../../store'
import * as action from './redux/Action'
import HolidayForm from './Form'

export default function HolidayPage() {
  const { holidays: { state, dispatch } } = React.useContext(Store)
  const [componentState, setState] = React.useState({
    isEditingHoliday: state.isUpdatingHoliday,
    details: {}
  })

  const editHolidayDetails = (item) => {
    console.log('e--->>> ', item)
    // setState({
    //   isEditingHoliday: state.isUpdatingHoliday,
    //   details: item
    // })
    action.showHolidayModal({ item, visible: true, dispatch })
  }

  React.useEffect(() => {
    state.data.length === 0 && action.fetchHolidays(dispatch)
  })
  const { isEditingHoliday, details } = componentState
  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>        
        <header>
            <h2>Holidays here</h2>
        </header>
        <section className='episode-layout'>
          <ul className='holiday-list'>
            <li>
              <span>Date</span>
              <span>Description</span>
            </li>
            {console.log('data: ', state.data)}
              {state.data.length ? state.data.map(item => {
                return (
                  <li key={item.name}>
                    <span>{item.date} </span>
                    <span>{item.name}</span>
                    <Button onClick={() => editHolidayDetails(item)}>
                      <Edit />
                    </Button>
                  </li>
                )  
              })
              : null
            }
          </ul>
        </section>
        <section>
          {/* Form here */}
          {isEditingHoliday ? (
            <HolidayForm {...details}/>
          ) : null}
        </section>
      </React.Suspense>
    </React.Fragment>
  )
}
