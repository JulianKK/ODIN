import React from 'react'
import { ListItemText, ListItemAvatar, Avatar } from '@material-ui/core'
import ms from 'milsymbol'
import { findSpecificItem } from '../stores/symbolDummyStore'


const symbolListFromSidc = list => {
  return list.map(element => {
    const url = new ms.Symbol(element.sidc).asCanvas().toDataURL()
    const elementInfo = findSpecificItem(element.sidc)
    return {
      key: elementInfo.name,
      sidc: elementInfo.sidc,
      text: <ListItemText primary={ elementInfo.name } secondary={ elementInfo.info } />,
      avatar: (
        <ListItemAvatar>
          <Avatar src={ url } style={{ borderRadius: 0, width: '15%', height: '15%' }} />
        </ListItemAvatar>
      )
    }
  })
}

const symbolList = list => {
  return list.map(element => {
    const url = new ms.Symbol(element.sidc).asCanvas().toDataURL()
    return {
      key: element.name,
      sidc: element.sidc,
      text: <ListItemText primary={ element.name } secondary={ element.info } />,
      avatar: (
        <ListItemAvatar>
          <Avatar src={ url } style={{ borderRadius: 0, width: '15%', height: '15%' }} />
        </ListItemAvatar>
      )
    }
  })
}

// Julian ToDo: Remove dubolicate code

export { symbolList, symbolListFromSidc }
