import React from 'react'
import { ListItemText, ListItemAvatar, Avatar } from '@material-ui/core'
import ms from 'milsymbol'


const symbolList = list => {
  return list.map(element => {
    const url = new ms.Symbol(element.sidc).asCanvas().toDataURL()
    return {
      key: element.name,
      text: <ListItemText primary={ element.name } secondary={ element.info } />,
      avatar: (
        <ListItemAvatar>
          <Avatar src={ url } style={{ borderRadius: 0, width: '15%', height: '15%' }} />
        </ListItemAvatar>
      )
    }
  })
}

export default symbolList
