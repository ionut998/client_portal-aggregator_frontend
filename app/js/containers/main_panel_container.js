import { connect } from 'react-redux'
import MainPanel from '../components/main_panel/main_panel.jsx'
import React, { Component, PropTypes } from 'react'

class MainPanelContainer extends Component {
  render () {
    const { leftHandNavVisible } = this.props
    return <MainPanel leftHandNavVisible={leftHandNavVisible} />
  }
}

MainPanelContainer.propTypes = {
  leftHandNavVisible: PropTypes.bool.isRequired,
}

const mapStateToProps = ({ header, router }) => {
  return {
    leftHandNavVisible: header.leftHandNavVisible,
  }
}

export default connect(
  mapStateToProps
)(MainPanelContainer)
