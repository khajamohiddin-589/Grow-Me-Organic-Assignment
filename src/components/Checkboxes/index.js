import './index.css'
import * as React from 'react'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

const Checkboxes = props => {
  const {each} = props

  const {Department} = each
  const {SubDepartments} = each
  const childOne = SubDepartments[0]
  const childTwo = SubDepartments[1]

  const [checked, setChecked] = React.useState([false, false])

  const handleChange1 = event => {
    setChecked([event.target.checked, event.target.checked])
  }

  const handleChange2 = event => {
    setChecked([event.target.checked, checked[1]])
  }

  const handleChange3 = event => {
    setChecked([checked[0], event.target.checked])
  }

  const children = (
    <Box sx={{display: 'flex', flexDirection: 'column', ml: 3}}>
      <FormControlLabel
        label={childOne}
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label={childTwo}
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  )

  return (
    <li className="kj">
      <FormControlLabel
        label={Department}
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      {children}
    </li>
  )
}

export default Checkboxes
