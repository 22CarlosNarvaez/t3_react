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
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded'
import PasswordField from './PasswordField'
import { useForm } from '../hooks/useForm'
import { CLIENT_ROLE } from '../constants/roles'
import { authService } from '../services/authService'
import { validateRegister } from '../utils/validators'
import { fieldProps } from '../utils/formProps'

const INITIAL_VALUES = {
  nombre: '',
  apellidos: '',
  documento: '',
  email: '',
  telefono: '',
  password: '',
  confirmPassword: '',
  aceptaTerminos: false,
}

export default function RegisterForm({ onAuthenticated }) {
  const form = useForm({
    initialValues: INITIAL_VALUES,
    validate: validateRegister,
    onSubmit: authService.register,
    onSuccess: (response) => onAuthenticated(response.user),
  })

  const isSubmitting = form.status === 'submitting'

  const propsOf = (name) => fieldProps(form, name, isSubmitting)
  const documentProps = propsOf('documento')

  return (
    <Box component="form" onSubmit={form.submit} noValidate>
      <Stack spacing={2.5}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2.5}>
          <TextField {...propsOf('nombre')} name="nombre" label="Nombre" autoComplete="given-name" />
          <TextField
            {...propsOf('apellidos')}
            name="apellidos"
            label="Apellidos"
            autoComplete="family-name"
          />
        </Stack>

        <TextField
          {...documentProps}
          name="documento"
          label={CLIENT_ROLE.documentLabel}
          placeholder={CLIENT_ROLE.documentPlaceholder}
          helperText={
            form.touched.documento ? form.errors.documento : CLIENT_ROLE.documentHint
          }
          error={Boolean(form.touched.documento && form.errors.documento)}
        />

        <TextField
          {...propsOf('email')}
          name="email"
          label="Correo electrónico"
          type="email"
          autoComplete="email"
          placeholder="tu@correo.com"
        />

        <TextField
          {...propsOf('telefono')}
          name="telefono"
          label="Teléfono"
          type="tel"
          autoComplete="tel"
          placeholder="+34 600 000 000"
        />

        <PasswordField
          {...propsOf('password')}
          inputProps={{ name: 'password' }}
          label="Crear contraseña"
          autoComplete="new-password"
          showStrength
        />

        <PasswordField
          {...propsOf('confirmPassword')}
          inputProps={{ name: 'confirmPassword' }}
          label="Confirmar contraseña"
          autoComplete="new-password"
        />

        <Box>
          <FormControlLabel
            control={
              <Checkbox
                checked={form.values.aceptaTerminos}
                onChange={form.handleCheckboxChange('aceptaTerminos')}
                onBlur={form.handleBlur('aceptaTerminos')}
                disabled={isSubmitting}
              />
            }
            label={
              <Typography variant="body2">
                Acepto los{' '}
                <Link component="button" type="button" onClick={(e) => e.preventDefault()}>
                  términos y condiciones
                </Link>{' '}
                y la{' '}
                <Link component="button" type="button" onClick={(e) => e.preventDefault()}>
                  política de privacidad
                </Link>
                .
              </Typography>
            }
          />
          {form.touched.aceptaTerminos && form.errors.aceptaTerminos && (
            <Typography variant="caption" color="error" sx={{ display: 'block', mt: 0.5 }}>
              {form.errors.aceptaTerminos}
            </Typography>
          )}
        </Box>

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
              <PersonAddAltRoundedIcon />
            )
          }
        >
          {isSubmitting ? 'Creando cuenta…' : 'Crear mi cuenta'}
        </Button>

        <Typography variant="caption" color="text.secondary" sx={{ textAlign: 'center' }}>
          Al registrarte aceptas nuestra política de seguridad y protección de datos.
        </Typography>
      </Stack>
    </Box>
  )
}
