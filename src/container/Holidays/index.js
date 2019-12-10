import React from 'react'
import { Button } from '@material-ui/core'
import { Edit } from '@material-ui/icons/'
import { Store } from '../../store'
import * as action from './redux/Action'
import HolidayForm from './Form'

export default function HolidayPage() {
  const { holidays: { state, dispatch } } = React.useContext(Store)
  const [componentState, setState] = React.useState({
    ...state
  })
  const editHolidayDetails = (item) => {
    action.showHolidayModal({ item, visible: true, dispatch })
  }

  const addHoliday = () => {
    const params = {
      item: null,
      visible: true,
      dispatch
    }
    action.showHolidayModal(params)
  }

  const { visible, details } = state

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <header>
          <h2>Holidays here</h2>
          <Button
            variant='contained'
            color='primary'
            onClick={addHoliday}>
            Add Holiday</Button>
        </header>
        <section>
          <ul className='holiday-list'>
            <li>
              <span>Action</span>
              <span>Date</span>
              <span>Description</span>
            </li>
              {state.data.length ? state.data.map(item => {
                return (
                  <li key={item.name}>
                    <Button onClick={() => editHolidayDetails(item)}>
                      <Edit />
                    </Button>
                    <span>{item.date} </span>
                    <span>{item.name}</span>
                  </li>
                )  
              }) : null
              }
          </ul>
        </section>
        <section>
          {visible ? (
            <HolidayForm {...details}/>
          ) : null}
        </section>
      </React.Suspense>
    </React.Fragment>
  )
}
