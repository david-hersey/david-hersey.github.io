import { lightTheme } from '../styles/theme'
import { SWITCH_THEME } from '../actions/theme'

const initialState = {
  theme: { ...lightTheme }
}

const themeReducer = (state = initialState, action) => {
  console.log('HERE REDUCER THEME STATE:', state)
  switch (action.type) {
    case SWITCH_THEME:
      let newState = {
        ...state,
        theme: { ...state.theme, ...action.baseTheme }
      }
      return newState
    default:
      return state
  }
}

export default themeReducer