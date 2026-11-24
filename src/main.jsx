import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline'
import App from './App.jsx'
import { AppThemeProvider } from './theme/ThemeModeProvider'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppThemeProvider>
      <CssBaseline />
      <App />
    </AppThemeProvider>
  </StrictMode>,
)
