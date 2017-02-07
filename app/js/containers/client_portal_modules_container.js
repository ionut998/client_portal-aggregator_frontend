import { connect } from 'react-redux'
import ClientPortalModules from '../components/client_portal_modules/client_portal_modules'

const mapStateToProps = ({aggregatorApp}) => ({
  modules: aggregatorApp.accessibleModules,
})

export default connect(
  mapStateToProps
)(ClientPortalModules)
