import { Box, Button, Chip, Container, Paper, Typography } from '@mui/material'
import ShieldRoundedIcon from '@mui/icons-material/ShieldRounded'
import FingerprintRoundedIcon from '@mui/icons-material/FingerprintRounded'
import LockRoundedIcon from '@mui/icons-material/LockRounded'
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import { BRAND } from '../../../theme'
import { SECURITY_FEATURES } from '../data/landingContent'

const ICONS = {
  cifrado: LockRoundedIcon,
  biometria: FingerprintRoundedIcon,
  monitoreo: ShieldRoundedIcon,
  verificacion: VerifiedUserRoundedIcon,
}

export default function SecuritySection({ onAuth }) {
  return (
    <Box
      id="seguridad"
      component="section"
      sx={{
        py: { xs: 9, md: 12 },
        color: '#FFFFFF',
        background: `linear-gradient(135deg, ${BRAND.navyDark} 0%, ${BRAND.navy} 65%, ${BRAND.navyLight} 100%)`,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '0.9fr 1.1fr' },
            gap: { xs: 6, md: 10 },
            alignItems: 'center',
          }}
        >
          <Box>
            <Chip
              label="Seguridad primero"
              variant="outlined"
              sx={{
                mb: 2.5,
                color: BRAND.goldLight,
                borderColor: 'rgba(227, 196, 92, 0.5)',
              }}
            />
            <Typography variant="h3" component="h2" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, mb: 2 }}>
              Protegemos lo que más te importa
            </Typography>
            <Typography sx={{ color: 'rgba(255,255,255,0.72)', fontSize: 17, mb: 4 }}>
              Cada operación, cada acceso y cada dato están respaldados por
              tecnología de seguridad bancaria de última generación.
            </Typography>
            <Button
              variant="contained"
              color="secondary"
              endIcon={<ArrowForwardRoundedIcon />}
              onClick={() => onAuth('register')}
              sx={{ color: BRAND.navy }}
            >
              Abrir una cuenta segura
            </Button>
          </Box>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))' },
              gap: 2,
            }}
          >
            {SECURITY_FEATURES.map((feature) => {
              const Icon = ICONS[feature.icon]
              return (
                <Paper
                  key={feature.title}
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                  }}
                >
                  <Box
                    sx={{
                      width: 46,
                      height: 46,
                      borderRadius: 2,
                      display: 'grid',
                      placeItems: 'center',
                      backgroundColor: 'rgba(227, 196, 92, 0.16)',
                      color: BRAND.goldLight,
                      mb: 2,
                    }}
                  >
                    <Icon />
                  </Box>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.65)' }}>
                    {feature.description}
                  </Typography>
                </Paper>
              )
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
