import { useState } from 'react'
import {
  Alert,
  Box,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded'
import PasswordField from './PasswordField'
import { useForm } from '../hooks/useForm'
import { authService } from '../services/authService'
import { validateLogin } from '../utils/validators'
import { fieldProps } from '../utils/formProps'
import { ROUTES } from '../../../shared/router'

const INITIAL_VALUES = {
  email: '',
  password: '',
}

export default function LoginForm({ onNavigate, onAuthenticated }) {
  const [recordarme, setRecordarme] = useState(true)
  const form = useForm({
    initialValues: INITIAL_VALUES,
    validate: validateLogin,
    onSubmit: authService.login,
    onSuccess: (response) => onAuthenticated(response.user),
  })

  const isSubmitting = form.status === 'submitting'

  const propsOf = (name) => fieldProps(form, name, isSubmitting)

  return (
    <Box component="form" onSubmit={form.submit} noValidate>
      <Stack spacing={2.5}>
        <TextField
          {...propsOf('email')}
          name="email"
          label="Correo electrónico"
          type="email"
          autoComplete="email"
          placeholder="tu@correo.com"
        />

        <PasswordField
          {...propsOf('password')}
          inputProps={{ name: 'password' }}
          label="Contraseña"
          autoComplete="current-password"
        />

        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={recordarme}
                onChange={(event) => setRecordarme(event.target.checked)}
                size="small"
                disabled={isSubmitting}
              />
            }
            label={<Typography variant="body2">Recordarme</Typography>}
          />
          <Link
            href={ROUTES.RECOVERY}
            underline="hover"
            onClick={() => onNavigate('recovery')}
            variant="body2"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </Stack>

        {form.feedback?.message && (
          <Alert severity={form.feedback.severity ?? 'error'}>
            {form.feedback.message}
          </Alert>
        )}

        <Button
          type="submit"
          variant="contained"
          size="large"
          fullWidth
          disabled={isSubmitting}
          startIcon={
            isSubmitting ? (
              <CircularProgress size={18} color="inherit" />
            ) : (
              <LoginRoundedIcon />
            )
          }
        >
          {isSubmitting ? 'Verificando…' : 'Iniciar sesión'}
        </Button>
      </Stack>
    </Box>
  )
}
