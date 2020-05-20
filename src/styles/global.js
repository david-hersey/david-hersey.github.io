

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.PRIMARY_BACKGROUND_COLOR};
    color: ${({ theme }) => theme.PRIMARY_TEXT_COLOR};
  }

  .btn-switcher {
    background: ${({ theme }) => theme.PRIMARY_BUTTON_COLOR};
  }
`