import {
  AppBar,
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material'
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded'
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded'
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded'
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded'
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded'
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded'
import { getRole, ROLE_IDS } from '../auth/constants/roles'
import { BRAND } from '../../theme'

const SUMMARY = {
  [ROLE_IDS.CLIENTE]: [
    { label: 'Saldo disponible', value: '$ 12,480.50', icon: AccountBalanceRoundedIcon },
    { label: 'Ahorro del mes', value: '$ 1,250.00', icon: TrendingUpRoundedIcon },
    { label: 'Transferencias', value: '18', icon: PaymentsRoundedIcon },
  ],
  [ROLE_IDS.ADMINISTRADOR]: [
    { label: 'Clientes activos', value: '250,418', icon: GroupsRoundedIcon },
    { label: 'Operaciones hoy', value: '8,932', icon: PaymentsRoundedIcon },
    { label: 'Alertas revisadas', value: '27', icon: VerifiedUserRoundedIcon },
  ],
}

const ACTIONS = {
  [ROLE_IDS.CLIENTE]: ['Transferir dinero', 'Pagar servicios', 'Ver mis tarjetas', 'Solicitar préstamo'],
  [ROLE_IDS.ADMINISTRADOR]: ['Gestionar clientes', 'Revisar operaciones', 'Validar identidades', 'Generar reportes'],
}

/** Vista posterior al login; el contenido cambia según el rol validado. */
export default function DashboardPage({ user, onLogout }) {
  if (!user) return null

  const role = getRole(user.rol)
  const isAdmin = role.id === ROLE_IDS.ADMINISTRADOR
  const summary = SUMMARY[role.id]
  const actions = ACTIONS[role.id]
  const initials = `${user.nombre?.[0] ?? ''}${user.apellidos?.[0] ?? ''}`.toUpperCase()

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <AppBar position="static" elevation={0} sx={{ backgroundColor: '#FFFFFF', borderBottom: 1, borderColor: 'divider' }}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            <Stack direction="row" spacing={1.25} sx={{ alignItems: 'center' }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  display: 'grid',
                  placeItems: 'center',
                  backgroundColor: 'primary.main',
                  color: BRAND.goldLight,
                }}
              >
                <AccountBalanceRoundedIcon />
              </Box>
              <Typography variant="h6" color="text.primary">Aurora Bank</Typography>
            </Stack>
            <Box sx={{ flexGrow: 1 }} />
            <Stack direction="row" spacing={2} sx={{ alignItems: 'center' }}>
              <Chip label={role.label} color="secondary" variant="outlined" size="small" />
              <Avatar sx={{ bgcolor: 'primary.main', width: 38, height: 38 }}>{initials || 'AB'}</Avatar>
              <Button
                variant="outlined"
                size="small"
                startIcon={<LogoutRoundedIcon />}
                onClick={onLogout}
                sx={{ display: { xs: 'none', sm: 'inline-flex' } }}
              >
                Cerrar sesión
              </Button>
              <Button
                aria-label="Cerrar sesión"
                size="small"
                onClick={onLogout}
                sx={{ display: { xs: 'inline-flex', sm: 'none' }, minWidth: 0, p: 1 }}
              >
                <LogoutRoundedIcon />
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
        <Box sx={{ mb: 5 }}>
          <Typography variant="h4" component="h1" sx={{ mb: 1 }}>
            {role.greeting}, {user.nombre}
          </Typography>
          <Typography color="text.secondary">
            {isAdmin
              ? 'Aquí tienes el resumen de la operación de la entidad.'
              : 'Este es el resumen de tus productos y movimientos.'}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: 'repeat(3, minmax(0, 1fr))' },
            gap: 3,
            mb: 4,
          }}
        >
          {summary.map(({ label, value, icon: Icon }) => (
            <Paper
              key={label}
              elevation={0}
              sx={{ p: 3, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}
            >
              <Stack direction="row" sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">{label}</Typography>
                  <Typography variant="h5" sx={{ mt: 1 }}>{value}</Typography>
                </Box>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    display: 'grid',
                    placeItems: 'center',
                    backgroundColor: 'rgba(11, 31, 58, 0.06)',
                    color: 'primary.main',
                  }}
                >
                  <Icon />
                </Box>
              </Stack>
            </Paper>
          ))}
        </Box>

        <Paper elevation={0} sx={{ p: { xs: 2, md: 3 }, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            {isAdmin ? 'Accesos de administración' : 'Accesos rápidos'}
          </Typography>
          <Stack
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
              gap: 1.5,
            }}
          >
            {actions.map((action) => (
              <Box
                key={action}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  p: 2,
                  borderRadius: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                }}
              >
               <Typography variant="body2" sx={{ fontWeight: 600 }}>{action}</Typography>
                <ChevronRightRoundedIcon fontSize="small" color="action" />
              </Box>
            ))}
          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}
