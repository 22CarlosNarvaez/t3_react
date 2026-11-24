import { useCallback, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { LandingPage } from './features/landing'
import { AuthPage } from './features/auth'
import DashboardPage from './features/dashboard/DashboardPage'
import { AUTH_ROUTES, ROUTES, resolveRoute, useHashRouter } from './shared/router'

const SESSION_KEY = 'aurora-bank-session'

/** La sesión se guarda solo en el navegador: no hay base de datos ni API. */
const readSession = () => {
  try {
    const stored = window.sessionStorage.getItem(SESSION_KEY)
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

/**
 * Raíz de la aplicación: resuelve la ruta, controla la sesión y compone la vista.
 * La lógica de cada dominio vive en `src/features`.
 */
export default function App() {
  const { hash, navigate } = useHashRouter()
  const route = resolveRoute(hash)
  const [session, setSession] = useState(readSession)

  useEffect(() => {
    try {
      if (session) {
        window.sessionStorage.setItem(SESSION_KEY, JSON.stringify(session))
      } else {
        window.sessionStorage.removeItem(SESSION_KEY)
      }
    } catch {
      // Almacenamiento no disponible: la app sigue funcionando en memoria.
    }
  }, [session])

  // El panel requiere sesión; sin ella, vuelve al login.
  useEffect(() => {
    if (route.view === 'dashboard' && !session) {
      navigate(ROUTES.LOGIN)
    }
  }, [route.view, session, navigate])

  // Solo las rutas de la app hacen scroll arriba; los anclas conservan su posición.
  useEffect(() => {
    if (hash.startsWith('#/')) {
      window.scrollTo(0, 0)
    }
  }, [hash, route.view, route.mode])

  const goAuth = useCallback(
    (mode) => navigate(AUTH_ROUTES[mode] ?? ROUTES.LOGIN),
    [navigate],
  )

  const navigateFromAuth = useCallback(
    (target) => (target === 'landing' ? navigate(ROUTES.HOME) : goAuth(target)),
    [navigate, goAuth],
  )

  const handleAuthenticated = useCallback(
    (user) => {
      setSession(user)
      navigate(ROUTES.DASHBOARD)
    },
    [navigate],
  )

  const handleLogout = useCallback(() => {
    setSession(null)
    navigate(ROUTES.HOME)
  }, [navigate])

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      {route.view === 'landing' && <LandingPage onAuth={goAuth} />}
      {route.view === 'auth' && (
        <AuthPage
          mode={route.mode}
          onNavigate={navigateFromAuth}
          onAuthenticated={handleAuthenticated}
        />
      )}
      {route.view === 'dashboard' && session && (
        <DashboardPage user={session} onLogout={handleLogout} />
      )}
    </Box>
  )
}
