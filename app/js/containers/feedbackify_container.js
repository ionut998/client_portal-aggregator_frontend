import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import Feedbackify from '../components/feedbackify/feedbackify'

const FeedbackifyContainer = ({ email }) => email ? <Feedbackify email={email} /> : null

FeedbackifyContainer.propTypes = {
  email: PropTypes.string,
}

const mapStateToProps = ({aggregatorApp}) => ({
  email: aggregatorApp.profile ? aggregatorApp.profile.email : null,
})

export default connect(
  mapStateToProps
)(FeedbackifyContainer)
