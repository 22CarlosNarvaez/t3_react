import { Link, Stack, Typography } from '@mui/material'
import AuthLayout from './components/AuthLayout'
import LoginForm from './components/LoginForm'
import RegisterForm from './components/RegisterForm'
import RecoveryForm from './components/RecoveryForm'

const COPY = {
  login: {
    title: 'Iniciar sesión',
    subtitle: 'Ingresa tus credenciales para acceder a tu banca en línea.',
    caption: 'Tu dinero, siempre a la mano.',
  },
  register: {
    title: 'Crear cuenta',
    subtitle: 'Abre tu cuenta Aurora Bank en menos de dos minutos.',
    caption: 'Empieza a construir tu futuro financiero hoy.',
  },
  recovery: {
    title: 'Recuperar contraseña',
    subtitle: 'Recupera el acceso a tu cuenta de forma rápida y segura.',
    caption: 'Recupera tu acceso con un par de pasos.',
  },
}

function AuthFooter({ mode, onNavigate }) {
  const link = (label, target) => (
    <Link
      component="button"
      type="button"
      underline="hover"
      onClick={() => onNavigate(target)}
      sx={{ border: 0, background: 'none', p: 0, fontWeight: 700 }}
    >
      {label}
    </Link>
  )

  if (mode === 'login') {
    return (
      <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
        <Typography variant="body2" color="text.secondary">
          ¿Aún no tienes cuenta?
        </Typography>
        {link('Crear cuenta', 'register')}
      </Stack>
    )
  }

  if (mode === 'register') {
    return (
      <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
        <Typography variant="body2" color="text.secondary">
          ¿Ya tienes cuenta?
        </Typography>
        {link('Iniciar sesión', 'login')}
      </Stack>
    )
  }

  return (
    <Stack direction="row" spacing={1} sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
      <Typography variant="body2" color="text.secondary">
        ¿Recordaste tu contraseña?
      </Typography>
      {link('Iniciar sesión', 'login')}
    </Stack>
  )
}

/** Orquesta los tres flujos de autenticación bajo un mismo layout. */
export default function AuthPage({ mode = 'login', onNavigate, onAuthenticated }) {
  const copy = COPY[mode] ?? COPY.login

  return (
    <AuthLayout
      key={mode}
      title={copy.title}
      subtitle={copy.subtitle}
      caption={copy.caption}
      onBack={() => onNavigate('landing')}
      footer={<AuthFooter mode={mode} onNavigate={onNavigate} />}
    >
      {mode === 'login' && (
        <LoginForm onNavigate={onNavigate} onAuthenticated={onAuthenticated} />
      )}
      {mode === 'register' && (
        <RegisterForm onAuthenticated={onAuthenticated} />
      )}
      {mode === 'recovery' && <RecoveryForm onNavigate={onNavigate} />}
    </AuthLayout>
  )
}
