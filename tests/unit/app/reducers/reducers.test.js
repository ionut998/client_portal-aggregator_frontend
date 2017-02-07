import { aggregatorApp, ui } from 'app/js/reducers/reducers.js'
import * as actionTypes from 'app/js/constants/action_types'

describe('reducers', () => {
  describe('aggregatorApp', () => {
    let initialState = {
      leftHandNavVisible: true,
      headerModulesVisible: false,
      accessibleModules: [],
      profile: null,
    }

    it('returns the initial state', () => {
      expect(aggregatorApp(undefined, {})).toEqual(initialState)
    })

    it('returns the current state if action type is not defined', () => {
      expect(
        aggregatorApp(
          {leftHandNavVisible: true},
          {type: {actions: undefined}}
        )
      ).toEqual(
        {leftHandNavVisible: true}
      )
    })
    describe('TOGGLE_LEFT_HAND_NAV', () => {
      describe('when the left hand nav is open', () => {
        it('closes the left hand nav', () => {
          expect(
            aggregatorApp(
              {leftHandNavVisible: true},
              {type: actionTypes.TOGGLE_LEFT_HAND_NAV}
            )
          ).toEqual(
            {
              leftHandNavVisible: false,
            }
          )
        })
      })

      describe('when the left hand nav is closed', () => {
        it('opens the left hand nav', () => {
          expect(
            aggregatorApp(
              {leftHandNavVisible: false},
              {type: actionTypes.TOGGLE_LEFT_HAND_NAV}
            )
          ).toEqual(
            {
              leftHandNavVisible: true,
            }
          )
        })
      })
    })

    describe('SHOW_HEADER_MODULES', () => {
      it('orders the items appropriately', () => {
        let unorderedModules = ['reevoo_admin', 'vetting', 'analytics', 'fast_response', 'help', 'admin', 'aggregator']
        let orderedModules = aggregatorApp(
          undefined,
          {
            type: actionTypes.SHOW_HEADER_MODULES,
            payload: unorderedModules,
          }
        ).accessibleModules

        expect(
          orderedModules.map(m => m.name)
        ).toEqual(
          ['Admin', 'Aggregator', 'Analytics', 'Fast Response', 'Reevoo Admin', 'Vetting', 'Help & FAQ']
        )
      })
    })
  })

  describe('ui', () => {
    let initialState = {
      loadingDashboardValues: false,
    }

    it('returns the initial state', () => {
      expect(ui(undefined, {})).toEqual(initialState)
    })
  })
})
