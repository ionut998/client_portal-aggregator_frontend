import React from 'react'
import { Router, Route, hashHistory } from 'react-router'
import { reduxReactRouter, ReduxRouter } from 'redux-router'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import reducers from './reducers/reducers'
import AppContainer from './containers/app_container'
import createHashHistory from 'history/lib/createHashHistory'

// Compose reduxReactRouter with other store enhancers
const store = compose(
  applyMiddleware(thunk),
  reduxReactRouter({ createHistory: createHashHistory })
)(createStore)(reducers)

/* TODO: check warning in console about "Failed prop type: Invalid prop `children` supplied to `Router`" */
render(
  <Provider store={store}>
    <ReduxRouter>
      <Router history={hashHistory}> /*  TODO: maybe use browserHistory? */
        <Route path='/' component={AppContainer} />
      </Router>
    </ReduxRouter>
  </Provider>, document.getElementById('app')
)
