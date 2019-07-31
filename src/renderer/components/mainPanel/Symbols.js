import React from 'react'
import { List, ListItem } from '@material-ui/core'
import PropTypes from 'prop-types'


class Symbols extends React.Component {

  render () {
    const style = {
      height: 'auto'
    }
    const { symbols } = this.props
    const listItems = () => (symbols || []).map(item => (
      <ListItem
        button
        divider={ false }
        key={ item.key }
      >
        { item.avatar }
        { item.text }
      </ListItem>
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

Symbols.propTypes = {
  symbols: PropTypes.any.isRequired
}

export default Symbols
