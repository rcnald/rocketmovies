import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { Sign, SignUp } from './pages/Sign'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Sign>
        <SignUp />
      </Sign>
    </ThemeProvider>
  </React.StrictMode>,
)
