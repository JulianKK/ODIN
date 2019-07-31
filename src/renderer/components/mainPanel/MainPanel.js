import React from 'react'
import Paper from '@material-ui/core/Paper'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import MapPaletteSearch from './MapPaletteSearch'
import SymbolSet from './SymbolSet'


class MainPanel extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      showComponents: () => this.showMapPalette()
    }
  }

  showMapPalette () {
    const compontents = { 'header': <MapPaletteSearch/>, 'list': <SymbolSet/> }
    return compontents
  }

  render () {
    const { classes } = this.props
    const { showComponents } = this.state
    const style = {
      height: 'auto'
    }
    const components = showComponents()
    return (
      <Paper
        className={ classes.paper }
        elevation={ 4 }
        style={ style }
      > { components.header }
        { components.list}
      </Paper>
    )
  }
}

const styles = theme => ({
  paper: {
    pointerEvents: 'auto',
    gridArea: 'L',
    background: 'rgba(252, 252, 255, 0.9)',

    // Layout:
    display: 'grid',
    gridTemplateRows: 'max-content auto',
    gridTemplateAreas: `
      "input"
      "content"
    `,
    borderRadius: '6px' // default: 4px
  }
})

MainPanel.propTypes = {
  classes: PropTypes.any.isRequired
}

export default withStyles(styles)(MainPanel)
