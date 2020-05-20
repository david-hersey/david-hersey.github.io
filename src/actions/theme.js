// define type
export const SWITCH_THEME = 'SWITCH_THEME'

// dispatch actions
export const switchTheme = BaseTheme => {
  console.log('HERE ACTIONS:', BaseTheme)
  return dispatch => {
    dispatch({
      type: SWITCH_THEME,
      baseTheme: BaseTheme
    })
  }
}