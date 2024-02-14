import React from 'react'
import ReactDOM from 'react-dom/client'
import { ThemeProvider } from 'styled-components'
import { AuthProvider } from './context/auth.jsx'
import { mountProviders } from './lib/utils.jsx'
import { Routes } from './routes'
import GlobalStyles from './styles/global'
import theme from './styles/theme'

const providers = [[AuthProvider], [ThemeProvider, { theme }]]

const AppProviders = mountProviders(providers)({
  children: (
    <>
      <GlobalStyles />
      <Routes />
    </>
  ),
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>{AppProviders}</React.StrictMode>,
)
