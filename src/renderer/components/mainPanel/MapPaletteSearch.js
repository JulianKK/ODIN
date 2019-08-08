import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import PropTypes from 'prop-types'
import { InputBase } from '@material-ui/core'
import { search } from '../../stores/symbolDummyStore'

class MapPaletteSearch extends React.Component {


  onChange (value) {
    const update = this.props.update
    update(search(value))
  }

  render () {
    const { classes } = this.props

    return (
      <InputBase
        className={ classes.searchField }
        placeholder={ 'Search...' }
        onChange={ event => this.onChange(event.target.value) }
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

MapPaletteSearch.propTypes = {
  update: PropTypes.func.isRequired
}

export default withStyles(styles)(MapPaletteSearch)
