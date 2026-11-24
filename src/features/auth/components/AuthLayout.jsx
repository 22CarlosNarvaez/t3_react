import {
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded'
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { ROUTES } from '../../../shared/router'
import { BRAND } from '../../../theme'

const CURRENT_YEAR = new Date().getFullYear()

const HIGHLIGHTS = [
  'Cifrado de extremo a extremo',
  'Verificación de identidad en cada acceso',
  'Soporte 24/7 para nuestros clientes',
]

export default function AuthLayout({
  title,
  subtitle,
  caption,
  children,
  footer,
  onBack,
}) {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: 'minmax(320px, 42%) 1fr' },
        backgroundColor: 'background.default',
      }}
    >
      <Box
        sx={{
          display: { xs: 'none', lg: 'flex' },
          flexDirection: 'column',
          justifyContent: 'space-between',
          position: 'relative',
          overflow: 'hidden',
          p: { md: 6, lg: 9 },
          color: '#FFFFFF',
          background: `linear-gradient(155deg, ${BRAND.navyDark} 0%, ${BRAND.navy} 55%, ${BRAND.navyLight} 100%)`,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            width: 340,
            height: 340,
            borderRadius: '50%',
            border: '1px solid rgba(255,255,255,0.28)',
            top: -120,
            right: -120,
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            width: 220,
            height: 220,
            borderRadius: '50%',
            backgroundColor: 'rgba(201, 162, 39, 0.12)',
            bottom: -70,
            left: -70,
          }}
        />

        <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center',  zIndex: 1 }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: 2,
              display: 'grid',
              placeItems: 'center',
              backgroundColor: BRAND.gold,
              color: BRAND.navy,
            }}
          >
            <AccountBalanceRoundedIcon />
          </Box>
          <Box>
            <Typography variant="h6" sx={{ lineHeight: {1:1} }}>
              Aurora Bank
            </Typography>
            <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.65)' }}>
              Banca digital de confianza
            </Typography>
          </Box>
        </Stack>

        <Box sx={{ zIndex: 1, maxWidth: 460 }}>
          <Chip
            icon={<LockOutlinedIcon />}
            label="Acceso seguro"
            sx={{
              mb: 3,
              color: BRAND.goldLight,
              borderColor: 'rgba(227,196,92,0.5)',
              backgroundColor: 'rgba(227,196,92,0.1)',
            }}
            variant="outlined"
          />
          <Typography variant="h3" component="h2" sx={{ color: '#FFFFFF', mb: 2 }}>
            {caption}
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.72)', fontSize: 17 }}>
            Gestiona tus productos, transfiere dinero y cuida tu futuro desde un
            solo lugar.
          </Typography>

          <Stack spacing={1.75} sx={{ mt: 5 }}>
            {HIGHLIGHTS.map((item) => (
              <Stack key={item} direction="row" spacing={1.25} sx={{ alignItems: 'center' }}>
                <CheckCircleRoundedIcon sx={{ color: BRAND.goldLight, fontSize: 20 }} />
                <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)' }}>
                  {item}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>

        <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)', zIndex: 1 }}>
          © {CURRENT_YEAR} Aurora Bank. Todos los derechos reservados.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 2, sm: 4, md: 6 },
        }}
      >
        <Container maxWidth="sm" disableGutters>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center',  mb: 3, display: { lg: 'none' } }}>
            <Box
              sx={{
                width: 38,
                height: 38,
                borderRadius: 2,
                display: 'grid',
                placeItems: 'center',
                backgroundColor: BRAND.navy,
                color: BRAND.goldLight,
              }}
            >
              <AccountBalanceRoundedIcon fontSize="small" />
            </Box>
            <Typography variant="h6">Aurora Bank</Typography>
          </Stack>

          {onBack && (
            <Button
              href={ROUTES.HOME}
              startIcon={<ArrowBackRoundedIcon />}
              onClick={onBack}
              size="small"
              sx={{ mb: 2, color: 'text.secondary' }}
            >
              Volver al inicio
            </Button>
          )}

          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 5 },
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 4,
            }}
          >
            <Typography variant="h4" component="h1">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mt: 1, mb: 4 }}>
              {subtitle}
            </Typography>
            {children}
          </Paper>

          {footer && (
            <Box sx={{ mt: 3, textAlign: 'center' }}>{footer}</Box>
          )}
        </Container>
      </Box>
    </Box>
  )
}
