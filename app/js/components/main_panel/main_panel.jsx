import React, { PropTypes } from 'react'
import { Card, CardHeader } from 'material-ui/Card'

import './main_panel.scss'

const cardHeaderStyles = {
  backgroundColor: '#f9f9f9',
}

const cardHeaderTitleStyles = {
  fontSize: '24px',
}

const MainPanel = ({leftHandNavVisible}) => {
  return (
    <div className={`main-panel ${leftHandNavVisible ? 'collapsed' : 'expanded'}`}>
      <Card style={cardHeaderStyles} className='main-panel__header'>
        <CardHeader title='Aggregator main panel' titleStyle={cardHeaderTitleStyles} />
      </Card>
      <div id='main-container' />
    </div>
  )
}

MainPanel.propTypes = {
  leftHandNavVisible: PropTypes.bool.isRequired,
}

export default MainPanel
