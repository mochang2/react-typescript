import { createGlobalStyle } from 'styled-components'
import NotoSansBold from 'assets/font/noto-sans-kr-bold.otf'
import NotoSansMedium from 'assets/font/noto-sans-kr-medium.otf'

export default createGlobalStyle`
  @font-face {
    font-family: 'notosans bold';
    src: url(${NotoSansBold});
  }

  @font-face {
    font-family: 'notosans medium';
    src: url(${NotoSansMedium});
  }
`
