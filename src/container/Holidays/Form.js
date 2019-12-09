import React from 'react'
import { TextField, Modal, Button } from '@material-ui/core'
import { Store } from '../../store'
import * as action from './redux/Action'

export default function HolidayForm (props) {
  const [item, setState] = React.useState({...props})
  const { holidays: { state, dispatch } } = React.useContext(Store)
  const inputName = React.useRef(item.name);
  const inputDate = React.useRef(item.date);

  const handleInputChange = (e) => {
    e.preventDefault()
    setState({
      ...item,
      [e.target.id]: e.target.value
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
  }

  const updateHoliday = () => {
    console.log('------->> UpdateFORM')
    action.updateHolidayDetails(item, dispatch)
  }

  return (
    <React.Fragment>
      <h2 id='modal-description'>{item.id ? 'Update' : 'Add'} Holiday</h2>
      <form onSubmit={handleFormSubmit} className='holiday-form'>
        <TextField
          id='id'
          label='ID'
          disabled
          className='text-field'
          defaultValue={item.id}
        />
          <TextField
            id='name'
            label='Name'
            className='text-field'
            defaultValue={item.name} 
            ref={inputName}
            onChange={handleInputChange} />
          <TextField
            id='date'
            label='Date'
            className='text-field'
            defaultValue={item.date}
            ref={inputDate} 
            onChange={handleInputChange} />
        <Button
          variant='contained'
          color='primary'
          onClick={updateHoliday}>
          {item.id ? 'Update' : 'Add'} Holiday
        </Button>
      </form>
    </React.Fragment>
  )
}