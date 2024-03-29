import { css } from 'styled-components'

export default {
  COLORS: {
    BACKGROUND: {
      900: '#1C1B1E',
      800: '#262529',
      700: '#312E38',
    },
    BRAND: '#FF859B',
    BRAND_5: '#FF859B11',
    GRAY: '#CAC4CF',
    ZINC: '#948F99',
    WHITE: '#FFF',
    BLACK: '#000',
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
    CONTAINER: css`
      max-width: 1120px;
      width: 100%;
      margin-inline: auto;
    `,
  },
}
