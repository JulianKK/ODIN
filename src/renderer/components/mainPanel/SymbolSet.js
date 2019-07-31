import React from 'react'
import { List, ListItem, Collapse } from '@material-ui/core'
import symbolSet from '../../model/mapPalette-symbolSet'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import Symbols from './Symbols'


class SymbolSet extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      symbolSet: symbolSet()
    }
  }

  onClick (key) {
    const symbolSet = this.state.symbolSet
    const index = symbolSet.findIndex(item => item.key === key)
    symbolSet[index].open = !symbolSet[index].open
    this.setState({ ...this.state, symbolSet })
  }

  render () {
    const style = {
      height: 'auto'
    }
    const { symbolSet } = this.state
    const listItems = () => (symbolSet || []).map(item => (
      <React.Fragment key= {item.key}>
        <ListItem
          button
          divider={ true }
          key={ item.key }
          onClick={ () => this.onClick(item.key) }
        >
          {item.open ? <ExpandLess /> : <ExpandMore />}
          { item.text }
        </ListItem>
        <Collapse in={item.open} timeout="auto" unmountOnExit>
          <Symbols symbols={item.symbols} />
        </Collapse>
      </React.Fragment>

    ))
    return (
      <List
        elevation={ 4 }
        style={ style }
      > { listItems()}
      </List>
    )
  }
}

export default SymbolSet
