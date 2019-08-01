import React from 'react'
import { List, ListItem } from '@material-ui/core'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'


class Symbols extends React.Component {

  render () {
    const style = {
      height: 'auto'
    }
    const { symbols, classes } = this.props
    const listItems = () => (symbols || []).map(item => (
      <ListItem
        button
        divider={ true }
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
        className={ classes.blub }
      > { listItems()}
      </List>
    )
  }
}

const styles = theme => ({
  blub: {
    maxHeight: 'auto',
    gridArea: 'content'
  }
})

Symbols.propTypes = {
  symbols: PropTypes.any.isRequired,
  classes: PropTypes.any.isRequired
}

export default withStyles(styles)(Symbols)
