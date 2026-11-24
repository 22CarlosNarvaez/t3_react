import {
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Stack,
  Typography,
} from '@mui/material'
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded'
import PaymentsRoundedIcon from '@mui/icons-material/PaymentsRounded'
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded'
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded'
import { ROUTES } from '../../../shared/router'
import { BRAND } from '../../../theme'

const HIGHLIGHTS = ['Sin comisiones ocultas', 'Apertura 100% digital', 'Soporte 24/7']

const QUICK_ACTIONS = [
  { label: 'Transferir', icon: PaymentsRoundedIcon },
  { label: 'Ahorrar', icon: SavingsRoundedIcon },
  { label: 'Tarjetas', icon: CreditCardRoundedIcon },
]

export default function HeroSection({ onAuth }) {
  return (
    <Box
      id="inicio"
      component="section"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        color: '#FFFFFF',
        pt: { xs: 7, md: 10 },
        pb: { xs: 18, md: 20 },
        background: `linear-gradient(135deg, ${BRAND.navyDark} 0%, ${BRAND.navy} 50%, ${BRAND.navyLight} 100%)`,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          width: 420,
          height: 420,
          borderRadius: '50%',
          border: '1px solid rgba(255,255,255,0.2)',
          top: -180,
          right: -100,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: 260,
          height: 260,
          borderRadius: '50%',
          backgroundColor: 'rgba(201, 162, 39, 0.1)',
          bottom: 40,
          left: -120,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative' }}>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', lg: '1.05fr 0.95fr' },
            gap: { xs: 6, md: 8 },
            alignItems: 'center',
          }}
        >
          <Box>
            <Chip
              label="Banca digital segura y simple"
              sx={{
                mb: 3,
                color: BRAND.goldLight,
                borderColor: 'rgba(227, 196, 92, 0.5)',
                backgroundColor: 'rgba(227, 196, 92, 0.1)',
              }}
              variant="outlined"
            />
            <Typography
              variant="h2"
              component="h1"
              sx={{ fontSize: { xs: '2.6rem', sm: '3.2rem', md: '3.8rem' }, lineHeight: 1.1, mb: 2.5 }}
            >
              Tu dinero,
              <Box component="span" sx={{ color: BRAND.goldLight, display: 'block' }}>
                en buenas manos.
              </Box>
            </Typography>
            <Typography sx={{ fontSize: 18, color: 'rgba(255,255,255,0.75)', maxWidth: 540, mb: 4 }}>
              Abre tu cuenta en minutos, gestiona tus productos desde donde estés
              y haz crecer tus metas con un banco que piensa en ti.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.75}>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                href={ROUTES.REGISTER}
                startIcon={<PersonAddAltRoundedIcon />}
                onClick={() => onAuth('register')}
                sx={{ color: 'secondary.contrastText', px: 3 }}
              >
                Abrir mi cuenta
              </Button>
              <Button
                variant="outlined"
                size="large"
                endIcon={<ArrowForwardRoundedIcon />}
                href="#productos"
                sx={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.45)', px: 3 }}
              >
                Ver productos
              </Button>
            </Stack>

            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={{ xs: 1.25, sm: 3 }}
              sx={{ mt: 4.5, flexWrap: 'wrap', gap: { xs: 0, sm: 1.5 } }}
            >
              {HIGHLIGHTS.map((item) => (
                <Stack key={item} direction="row" spacing={0.75} sx={{ alignItems: 'center' }}>
                  <CheckCircleRoundedIcon sx={{ fontSize: 18, color: BRAND.goldLight }} />
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          <Box sx={{ position: 'relative', maxWidth: 480, mx: 'auto', width: '100%' }}>
            <Box
              sx={{
                p: 3,
                borderRadius: 4,
                transform: 'rotate(-3deg)',
                border: '1px solid rgba(227, 196, 92, 0.45)',
                background: `linear-gradient(135deg, ${BRAND.navyLight} 0%, ${BRAND.navyDark} 100%)`,
                boxShadow: '0 24px 50px rgba(0,0,0,0.35)',
              }}
            >
              <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="subtitle1" sx={{ fontWeight: 800, letterSpacing: 2 }}>
                  AURORA
                </Typography>
                <Chip label="Débito" size="small" sx={{ bgcolor: BRAND.gold, color: BRAND.navy }} />
              </Stack>
              <Typography sx={{ fontSize: { xs: 22, sm: 28 }, letterSpacing: 4, mt: 6, mb: 4 }}>
                •••• •••• •••• 4821
              </Typography>
              <Stack direction="row" sx={{ alignItems: 'flex-end', justifyContent: 'space-between' }}>
                <Box>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.55)', display: 'block' }}>
                    TITULAR
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    MARÍA GARCÍA
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.55)', display: 'block' }}>
                    VENCE
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}> 
                    08/28
                  </Typography>
                </Box>
              </Stack>
            </Box>

            <Paper
              elevation={0}
              sx={{
                mt: -4,
                mr: { md: -4 },
                p: 3,
                borderRadius: 4,
                position: 'relative',
                color: 'text.primary',
                border: '1px solid',
                borderColor: 'divider',
                boxShadow: '0 20px 45px rgba(0,0,0,0.22)',
              }}
            >
              <Typography variant="body2" color="text.secondary">
                Saldo disponible
              </Typography>
              <Typography variant="h4" sx={{ mt: 0.5, mb: 2.5 }}>
                $ 12,480.50
              </Typography>
              <Stack direction="row" spacing={1.5}>
                {QUICK_ACTIONS.map(({ label, icon: Icon }) => (
                  <Box
                    key={label}
                    sx={{
                      flex: 1,
                      p: 1.5,
                      borderRadius: 2,
                      textAlign: 'center',
                      backgroundColor: 'action.hover',
                    }}
                  >
                    <Icon sx={{ color: 'primary.main', fontSize: 22 }} />
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block' }}>
                      {label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Paper>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
