import { useCallback, useEffect, useState } from 'react'
import { ROUTES } from './routes'

const readHash = () => window.location.hash || ROUTES.HOME

/** Router mínimo basado en hash: navegación, back/forward y enlaces directos. */
export function useHashRouter() {
  const [hash, setHash] = useState(readHash)

  useEffect(() => {
    const handleHashChange = () => setHash(readHash())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const navigate = useCallback((to) => {
    const next = to.startsWith('#') ? to : `#${to}`
    if (window.location.hash === next) {
      setHash(next)
      return
    }
    window.location.hash = next
  }, [])

  return { hash, navigate }
}
