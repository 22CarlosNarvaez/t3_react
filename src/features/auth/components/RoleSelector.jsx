import {
  FormControl,
  FormLabel,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from '@mui/material'
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded'
import AdminPanelSettingsRoundedIcon from '@mui/icons-material/AdminPanelSettingsRounded'
import { ROLES } from '../constants/roles'

const ICONS = {
  cliente: AccountCircleRoundedIcon,
  administrador: AdminPanelSettingsRoundedIcon,
}

/** Selector de perfil compartido por login y registro. */
export default function RoleSelector({ value, onChange, disabled = false }) {
  return (
    <FormControl fullWidth sx={{ mb: 3 }}>
      <FormLabel sx={{ mb: 1, color: 'text.primary', fontWeight: 700 }}>
        Tipo de usuario
      </FormLabel>
      <ToggleButtonGroup
        exclusive
        fullWidth
        value={value}
        disabled={disabled}
        onChange={(_, next) => next && onChange(next)}
        aria-label="Tipo de usuario"
        sx={{ gap: 1.5 }}
      >
        {ROLES.map((role) => {
          const Icon = ICONS[role.icon]
          return (
            <ToggleButton
              key={role.id}
              value={role.id}
              aria-label={role.label}
              sx={{
                flexDirection: 'column',
                gap: 1,
                py: 1.75,
                px: 1,
                textTransform: 'none',
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: '12px !important',
                color: 'text.secondary',
                '&.Mui-selected': {
                  borderColor: 'primary.main',
                  backgroundColor: 'rgba(11, 31, 58, 0.06)',
                  color: 'primary.main',
                },
                '&.Mui-selected:hover': {
                  backgroundColor: 'rgba(11, 31, 58, 0.1)',
                },
              }}
            >
              <Stack spacing={0.5} sx={{ alignItems: 'center' }}>
                <Icon fontSize="medium" />
                <Typography variant="body2" sx={{ fontWeight: 600 }}>{action}
                  {role.label}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {role.shortLabel}
                </Typography>
              </Stack>
            </ToggleButton>
          )
        })}
      </ToggleButtonGroup>
    </FormControl>
  )
}
