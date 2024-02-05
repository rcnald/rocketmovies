import { css } from 'styled-components'

export default {
  COLORS: {
    BACKGROUND: {
      900: '#1C1B1E',
      800: '#262529',
    },
    BRAND: '#FF859B',
    GRAY: '#CAC4CF',
    ZINC: '#948F99',
    WHITE: '#FFF',
  },
  UTILS: {
    SRONLY: css`
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    `,
  },
}
