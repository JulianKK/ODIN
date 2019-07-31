import symbolSetData from '../stores/symbolSetStore'
import { ListItemText } from '@material-ui/core'
import React from 'react'
import symbolList from './mapPalette-symbol'

const symbolSet = () => {
  const data = symbolSetData()
  return data.map(element => ({
    key: element.name,
    text: <ListItemText primary={ element.name }/>,
    open: false,
    symbols: symbolList(element.content)
  }))
}

export default symbolSet
