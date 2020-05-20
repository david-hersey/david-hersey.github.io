

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
    font-family: ${({ theme }) => theme.FONT_FAMILY};
  }

  .btn-switcher {
    background: ${({ theme }) => theme.PRIMARY_BUTTON_COLOR};
    color: ${({ theme }) => theme.PRIMARY_BUTTON_TEXT_COLOR};
  }

  .btn-switcher:hover {
    color: ${({ theme }) => theme.PRIMARY_BUTTON_TEXT_COLOR};
  }
`