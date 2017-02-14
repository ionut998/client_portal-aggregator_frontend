import { connect } from 'react-redux'
import LeftHandNav from '../components/left_hand_nav/left_hand_nav.jsx'
import React, { PropTypes } from 'react'

const LeftHandNavContainer = ({ leftHandNavVisible, selectedDashboardId }) => (
  <LeftHandNav
    leftHandNavVisible={leftHandNavVisible}
    selectedDashboardId={selectedDashboardId}
  />
)

LeftHandNavContainer.propTypes = {
  leftHandNavVisible: PropTypes.bool.isRequired,
  selectedDashboardId: PropTypes.string,
}

const mapStateToProps = ({ header, router }) => ({
  leftHandNavVisible: header.leftHandNavVisible,
  selectedDashboardId: router.params ? router.params.id : null,
})

export default connect(mapStateToProps)(LeftHandNavContainer)
