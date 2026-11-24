import { Box, Button, Container, Stack, Typography } from '@mui/material'
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded'
import { BRAND } from '../../../theme'

export default function CtaSection({ onAuth }) {
  return (
    <Box sx={{ pb: { xs: 9, md: 12 } }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            borderRadius: 5,
            p: { xs: 4, md: 7 },
            textAlign: 'center',
            color: '#FFFFFF',
            background: `linear-gradient(120deg, ${BRAND.navy} 0%, ${BRAND.navyLight} 100%)`,
            border: '1px solid rgba(227, 196, 92, 0.35)',
          }}
        >
          <Typography variant="h3" component="h2" sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, mb: 1.5 }}>
            ¿Listo para dar el siguiente paso?
          </Typography>
          <Typography sx={{ color: 'rgba(255,255,255,0.75)', fontSize: 17, mb: 4, mx: 'auto', maxWidth: 620 }}>
            Únete a Aurora Bank y descubre una forma más simple, segura y cercana
            de gestionar tus finanzas.
          </Typography>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1.75} sx={{ justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<PersonAddAltRoundedIcon />}
              onClick={() => onAuth('register')}
              sx={{ color: BRAND.navy }}
            >
              Crear mi cuenta
            </Button>
            <Button
              variant="outlined"
              size="large"
              startIcon={<LoginRoundedIcon />}
              onClick={() => onAuth('login')}
              sx={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.5)' }}
            >
              Ya tengo cuenta
            </Button>
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
