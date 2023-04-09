import React from 'react'
import ReactDOM from 'react-dom/client'
import { Grommet } from "grommet"
import App from './App'
import './index.css'
import theme from './theme'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Grommet theme={theme}>
      <App />
    </Grommet>
  </React.StrictMode>,
)
