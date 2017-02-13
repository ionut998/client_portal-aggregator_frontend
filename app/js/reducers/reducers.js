import { combineReducers } from 'redux'
import { routerStateReducer } from 'redux-router'
import * as actionTypes from '../constants/action_types'
import {
  CP_ADMIN_URL, CP_ANALYTICS_URL, FAST_RESPONSE_URL, REEVOO_ADMIN_URL, VETTING_URL, HELP_URL, CP_AGGREGATOR_URL,
} from '../constants/app_constants'

const initialState = {
  leftHandNavVisible: true,
  headerModulesVisible: false,
  accessibleModules: [],
  profile: null,
}

// TODO: why we have image references in the reducer?
import adminImagePath from 'client_portal-assets/dist/images/app_icons/large/admin.png'
import analyticsImagePath from 'client_portal-assets/dist/images/app_icons/large/analytics.png'
import fastResponseImagePath from 'client_portal-assets/dist/images/app_icons/large/fast_response.png'
import reevooAdminImagePath from 'client_portal-assets/dist/images/app_icons/large/reevoo_admin.png'
import vettingImagePath from 'client_portal-assets/dist/images/app_icons/large/vetting.png'
import helpImagePath from 'client_portal-assets/dist/images/app_icons/large/help.png'
import aggregatorImagePath from 'client_portal-assets/dist/images/app_icons/large/facebook.png'

// TODO: maybe this should get out of here?
export const modules = (accessibleModules) => {
  const availableModules = {
    admin: {
      url: CP_ADMIN_URL,
      name: 'Admin',
      imageUrl: adminImagePath,
    },
    analytics: {
      url: CP_ANALYTICS_URL,
      name: 'Analytics',
      imageUrl: analyticsImagePath,
    },
    fast_response: {
      url: FAST_RESPONSE_URL,
      name: 'Fast Response',
      imageUrl: fastResponseImagePath,
    },
    reevoo_admin: {
      url: REEVOO_ADMIN_URL,
      name: 'Reevoo Admin',
      imageUrl: reevooAdminImagePath,
    },
    vetting: {
      url: VETTING_URL,
      name: 'Vetting',
      imageUrl: vettingImagePath,
    },
    help: {
      url: HELP_URL,
      name: 'Help & FAQ',
      imageUrl: helpImagePath,
    },
    aggregator: {
      url: CP_AGGREGATOR_URL,
      name: 'Aggregator',
      imageUrl: aggregatorImagePath,
    },
  }

  let orderedModules = accessibleModules
    .filter((name) => name !== 'help' && !!availableModules[name]) // Filter out modules which aren't available
    .sort()
    .map((name) => availableModules[name])

  /* Everyone has access to the 'help' module, but we want to display it at the end of lists,
   * so filter it out above and then just push it on here... Yes, it is a bit crap so please
   * do improve if you have better brains than us
   */
  if (accessibleModules.indexOf('help') > -1) {
    orderedModules.push(availableModules.help)
  }

  return orderedModules
}

export const aggregatorApp = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_LEFT_HAND_NAV:
      return { ...state, leftHandNavVisible: !state.leftHandNavVisible }

    case actionTypes.SHOW_HEADER_MODULES:
      return {
        ...state,
        headerModulesVisible: true,
        accessibleModules: modules(action.payload),
      }

    case actionTypes.HIDE_HEADER_MODULES:
      return { ...state, headerModulesVisible: false }

    default:
      return state
  }
}

export default combineReducers({
  aggregatorApp,
  router: routerStateReducer,
})
