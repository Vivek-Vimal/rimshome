import { createGlobalStyle } from 'styled-components'
// eslint-disable-next-line import/no-unresolved
import { PancakeTheme } from '@pancakeswap-libs/uikit'

declare module 'styled-components' {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends PancakeTheme {}
}

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Kanit', sans-serif;
  }
  body {
    background-size: auto 100%;
     background-image: url('/bg1.gif');  ${({ theme }) => theme.colors.backgroundImg};
    background-attachment: fixed; 
    background-position: center center;
    ${({ theme }) => theme.mediaQueries.nav} { 
      background-size: 100% 100%;
  }
    img {
      height: auto;
      max-width: 100%;
    }
  }
`

export default GlobalStyle
