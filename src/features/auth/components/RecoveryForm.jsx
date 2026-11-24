import { useState } from 'react'
import {
  Alert,
  Box,
  Button,
  CircularProgress,
  Step,
  StepLabel,
  Stepper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined'
import LockResetRoundedIcon from '@mui/icons-material/LockResetRounded'
import SendRoundedIcon from '@mui/icons-material/SendRounded'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import PasswordField from './PasswordField'
import { useForm } from '../hooks/useForm'
import { authService } from '../services/authService'
import {
  validateRecoveryRequest,
  validateRecoveryReset,
} from '../utils/validators'
import { fieldProps } from '../utils/formProps'
import { ROUTES } from '../../../shared/router'

const STEPS = ['Correo', 'Código y contraseña', 'Listo']
const INITIAL_REQUEST = { email: '' }
const INITIAL_RESET = { code: '', password: '', confirmPassword: '' }

/**
 * Recuperación autogestionada en tres pasos: solicitud de código,
 * verificación + nueva contraseña y confirmación.
 */
export default function RecoveryForm({ onNavigate }) {
  const [activeStep, setActiveStep] = useState(0)
  const [email, setEmail] = useState('')
  const [demoCode, setDemoCode] = useState('')

  const request = useForm({
    initialValues: INITIAL_REQUEST,
    validate: validateRecoveryRequest,
    onSubmit: authService.requestRecovery,
    onSuccess: (response) => {
      setEmail(response.email)
      setDemoCode(response.demoCode)
      setActiveStep(1)
    },
  })

  const reset = useForm({
    initialValues: INITIAL_RESET,
    validate: validateRecoveryReset,
    onSubmit: authService.resetPassword,
    onSuccess: () => setActiveStep(2),
  })

  const isSending = request.status === 'submitting'
  const isSaving = reset.status === 'submitting'

  return (
    <Box>
      <Stepper
        activeStep={activeStep}
        alternativeLabel
        sx={{
          mb: 4,
          '& .MuiStepIcon-root': {
            color: 'text.secondary',
          },
          '& .MuiStepIcon-root.Mui-active': {
            color: 'primary.main',
          },
        }}
      >
        {STEPS.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      {activeStep === 0 && (
        <Box component="form" onSubmit={request.submit} noValidate>
          <Stack spacing={2.5}>
            <Typography variant="body2" color="text.secondary">
              Ingresa el correo electrónico de tu cuenta. Te enviaremos un código
              para verificar tu identidad.
            </Typography>

            <TextField
              {...fieldProps(request, 'email', isSending)}
              name="email"
              label="Correo electrónico"
              type="email"
              autoComplete="email"
              placeholder="tu@correo.com"
            />

            {request.feedback?.message && (
              <Alert severity={request.feedback.severity ?? 'error'}>
                {request.feedback.message}
              </Alert>
            )}

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={isSending}
              startIcon={
                isSending ? (
                  <CircularProgress size={18} color="inherit" />
                ) : (
                  <SendRoundedIcon />
                )
              }
            >
              {isSending ? 'Enviando código…' : 'Enviar código de recuperación'}
            </Button>
          </Stack>
        </Box>
      )}

      {activeStep === 1 && (
        <Box component="form" onSubmit={reset.submit} noValidate>
          <Stack spacing={2.5}>
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
              <EmailOutlinedIcon color="primary" />
              <Typography variant="body2">
                Código enviado a <strong>{email}</strong>
              </Typography>
            </Stack>

            <Alert severity="info">
              Modo demostración: usa el código <strong>{demoCode}</strong> para
              continuar.
            </Alert>

            <TextField
              {...fieldProps(reset, 'code', isSaving)}
              name="code"
              label="Código de verificación"
              placeholder="000000"
              slotProps={{ htmlInput: { inputMode: 'numeric', maxLength: 6 } }}
            />

            <PasswordField
              {...fieldProps(reset, 'password', isSaving)}
              inputProps={{ name: 'password' }}
              label="Nueva contraseña"
              autoComplete="new-password"
              showStrength
            />

            <PasswordField
              {...fieldProps(reset, 'confirmPassword', isSaving)}
              inputProps={{ name: 'confirmPassword' }}
              label="Confirmar nueva contraseña"
              autoComplete="new-password"
            />

            {reset.feedback?.message && (
              <Alert severity={reset.feedback.severity ?? 'error'}>
                {reset.feedback.message}
              </Alert>
            )}

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              disabled={isSaving}
              startIcon={
                isSaving ? (
                  <CircularProgress size={18} color="inherit" />
                ) : (
                  <LockResetRoundedIcon />
                )
              }
            >
              {isSaving ? 'Actualizando…' : 'Actualizar contraseña'}
            </Button>

            <Button
              type="button"
              size="small"
              startIcon={<ArrowBackRoundedIcon />}
              onClick={() => {
                request.reset()
                reset.reset()
                setActiveStep(0)
              }}
              disabled={isSaving}
            >
              Cambiar correo
            </Button>
          </Stack>
        </Box>
      )}

      {activeStep === 2 && (
        <Stack spacing={2.5} sx={{ alignItems: 'center',  textAlign: 'center', py: 2 }}>
          <Box
            sx={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              display: 'grid',
              placeItems: 'center',
              backgroundColor: 'rgba(46, 125, 91, 0.12)',
              color: 'success.main',
            }}
          >
            <CheckCircleRoundedIcon sx={{ fontSize: 44 }} />
          </Box>
          <Typography variant="h5">¡Contraseña actualizada!</Typography>
          <Alert severity="success" sx={{ width: '100%', textAlign: 'left' }}>
            {reset.feedback?.message ??
              'Tu contraseña fue actualizada correctamente.'}
          </Alert>
          <Button
            href={ROUTES.LOGIN}
            variant="contained"
            size="large"
            fullWidth
            onClick={() => onNavigate('login')}
          >
            Ir a iniciar sesión
          </Button>
        </Stack>
      )}
    </Box>
  )
}
