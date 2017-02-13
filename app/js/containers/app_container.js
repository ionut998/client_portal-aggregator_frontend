import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import Header from '../containers/header_container'

import '../../styles/styles.scss' // Load global overrides (as few as possible please)
import colours from '!!sass-variable-loader!client_portal-assets/dist/sass/colours.scss' // Load Reevoo colour variables

import injectTapEventPlugin from 'react-tap-event-plugin'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'

// TODO: move this stuff into App.jsx?
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

const rvMuiTheme = getMuiTheme({
  appBar: {
    color: colours.reevooOrange,
  },
  palette: {
    primary1Color: colours.darkSkyBlue,
  },
  fontFamily: 'Open Sans, sans-serif',
  textField: {
    floatingLabelColor: colours.reevooOrange,
    focusColor: colours.reevooOrange,
  },
  zIndex: {
    appBar: 1350, // Puts us over the left hand nav
  },
})

class App extends Component {
  render () {
    return (
      <MuiThemeProvider muiTheme={rvMuiTheme}>
        <div>
          <Header />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    )
  }
}

App.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
  params: PropTypes.object.isRequired,
}

export default connect(null, {})(App)
