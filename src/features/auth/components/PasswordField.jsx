import { useMemo, useState } from 'react'
import {
  Box,
  Chip,
  IconButton,
  InputAdornment,
  LinearProgress,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import RadioButtonUncheckedRoundedIcon from '@mui/icons-material/RadioButtonUncheckedRounded'
import { evaluatePassword } from '../utils/validators'

const STRENGTH_COLOR = {
  Débil: 'error',
  Media: 'warning',
  Fuerte: 'success',
}

/** Campo de contraseña reutilizable en login, registro y recuperación. */
export default function PasswordField({
  label = 'Contraseña',
  value,
  onChange,
  onBlur,
  error,
  helperText,
  autoComplete = 'current-password',
  showStrength = false,
  disabled = false,
  inputProps = {},
}) {
  const [visible, setVisible] = useState(false)
  const strength = useMemo(
    () => (showStrength ? evaluatePassword(value) : null),
    [showStrength, value],
  )

  return (
    <Box>
      <TextField
        label={label}
        name={inputProps.name}
        type={visible ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        error={Boolean(error)}
        helperText={error || helperText}
        disabled={disabled}
        autoComplete={autoComplete}
        fullWidth
        slotProps={{
          htmlInput: inputProps,
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label={visible ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                  onClick={() => setVisible((current) => !current)}
                  edge="end"
                  disabled={disabled}
                >
                  {visible ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />

      {showStrength && strength && (
        <Box sx={{ mt: 1.5 }}>
          <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography variant="caption" color="text.secondary">
              Seguridad de la contraseña
            </Typography>
            <Chip
              size="small"
              variant="outlined"
              color={STRENGTH_COLOR[strength.strength]}
              label={strength.strength}
            />
          </Stack>
          <LinearProgress
            variant="determinate"
            value={(strength.score / 5) * 100}
            color={STRENGTH_COLOR[strength.strength]}
            sx={{ height: 6, borderRadius: 3, mt: 1 }}
          />
          <Box
            sx={{
              mt: 1.5,
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
              gap: 0.5,
            }}
          >
            {strength.rules.map((rule) => (
              <Stack key={rule.id} direction="row" spacing={0.5} sx={{ alignItems: 'center' }}>
                {rule.ok ? (
                  <CheckCircleRoundedIcon sx={{ fontSize: 16, color: 'success.main' }} />
                ) : (
                  <RadioButtonUncheckedRoundedIcon sx={{ fontSize: 16, color: 'text.disabled' }} />
                )}
                <Typography variant="caption" color={rule.ok ? 'text.primary' : 'text.secondary'}>
                  {rule.label}
                </Typography>
              </Stack>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  )
}
