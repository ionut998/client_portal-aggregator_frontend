import React, { PropTypes } from 'react'
import Divider from 'material-ui/Divider'
import Drawer from 'material-ui/Drawer'
import { List, MakeSelectable } from 'material-ui/List'
import './left_hand_nav.scss'

import LeftHandNavHeader from '../left_hand_nav_header/left_hand_nav_header.jsx'
import colours from '!!sass-variable-loader!client_portal-assets/dist/sass/colours.scss' // Load Reevoo colour variables
import aggregatorPath from 'client_portal-assets/dist/images/app_icons/large/help.png'

const listStyle = {
  paddingTop: 0,
}

const selectedItemStyle = {
  color: colours.reevooOrange,
  textDecoration: 'none',
}

const SelectableList = MakeSelectable(List)

/* This is needed to avoid a nasty warning/error in the console.
 * Once we refactor the reducers we can simplify it accessing the dashboards by id directly.
 */
const onChange = () => {}

const LeftHandNav = ({ leftHandNavVisible }) => (
  <Drawer open={leftHandNavVisible} className='left-hand-nav'>
    <LeftHandNavHeader imgPath={aggregatorPath} text='Aggregator' />
    <Divider />
    <SelectableList
      onChange={onChange}
      selectedItemStyle={selectedItemStyle}
      style={listStyle}
    />
  </Drawer>
)

LeftHandNav.propTypes = {
  leftHandNavVisible: PropTypes.bool.isRequired,
}

export default LeftHandNav
