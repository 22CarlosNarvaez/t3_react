import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { createAppTheme } from './index'

const STORAGE_KEY = 'aurora-bank-theme'
const ThemeModeContext = createContext(null)

const readInitialMode = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') return stored
  } catch {
    // Storage no disponible: se respeta la preferencia del sistema.
  }
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

/** Proveedor global de tema: expone el modo y la función para alternarlo. */
export function AppThemeProvider({ children }) {
  const [mode, setMode] = useState(readInitialMode)

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, mode)
    } catch {
      // Sin persistencia el tema sigue funcionando durante la sesión.
    }
  }, [mode])

  const toggleMode = useCallback(
    () => setMode((current) => (current === 'light' ? 'dark' : 'light')),
    [],
  )

  const theme = useMemo(() => createAppTheme(mode), [mode])
  const value = useMemo(
    () => ({ mode, setMode, toggleMode }),
    [mode, toggleMode],
  )

  return (
    <ThemeModeContext.Provider value={value}>
      <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>
    </ThemeModeContext.Provider>
  )
}

export function useThemeMode() {
  const context = useContext(ThemeModeContext)
  if (!context) {
    throw new Error('useThemeMode debe usarse dentro de AppThemeProvider')
  }
  return context
}
