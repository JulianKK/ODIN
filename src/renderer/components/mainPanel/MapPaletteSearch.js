import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { InputBase } from '@material-ui/core'

class MapPaletteSearch extends React.Component {
  render () {
    const { classes } = this.props

    return (
      <InputBase
        className={ classes.searchField }
        placeholder={ 'Search...' }
        autoFocus
      />
    )
  }
}

MapPaletteSearch.propTypes = {
  classes: PropTypes.any.isRequired
}

const styles = theme => ({
  searchField: {
    paddingLeft: '12px',
    paddingRight: '8px',
    paddingTop: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    fontSize: '120%',
    gridArea: 'input'
  }
})

export default withStyles(styles)(MapPaletteSearch)
