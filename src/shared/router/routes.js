/**
 * Rutas de la SPA. Se usa el hash para no requerir configuración del servidor
 * ni dependencias externas: `#/iniciar-sesion`, `#/crear-cuenta`, etc.
 * Los anclas de sección (`#productos`) siguen funcionando y caen en la landing.
 */
export const ROUTES = {
  HOME: '#/',
  LOGIN: '#/iniciar-sesion',
  REGISTER: '#/crear-cuenta',
  RECOVERY: '#/recuperar-contrasena',
  DASHBOARD: '#/panel',
}

export const AUTH_ROUTES = {
  login: ROUTES.LOGIN,
  register: ROUTES.REGISTER,
  recovery: ROUTES.RECOVERY,
}

/** Convierte un hash en la vista que debe renderizarse. */
export function resolveRoute(hash) {
  const path = String(hash || '').replace(/^#/, '') || '/'

  switch (path) {
    case '/iniciar-sesion':
      return { view: 'auth', mode: 'login' }
    case '/crear-cuenta':
      return { view: 'auth', mode: 'register' }
    case '/recuperar-contrasena':
      return { view: 'auth', mode: 'recovery' }
    case '/panel':
      return { view: 'dashboard', mode: null }
    case '/':
    default:
      return { view: 'landing', mode: null }
  }
}
