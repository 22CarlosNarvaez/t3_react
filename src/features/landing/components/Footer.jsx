import { Box, Container, Divider, Link, Stack, Typography } from '@mui/material'
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded'
import { BRAND } from '../../../theme'
import { FOOTER_COLUMNS } from '../data/landingContent'

const CURRENT_YEAR = new Date().getFullYear()

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: BRAND.navyDark, color: '#FFFFFF', pt: 7, pb: 3 }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', md: '1.4fr repeat(3, 1fr)' },
            gap: 5,
          }}
        >
          <Box>
            <Stack direction="row" spacing={1.25} sx={{ alignItems: 'center',  mb: 2 }}>
              <Box
                sx={{
                  width: 40,
                  height: 40,
                  borderRadius: 2,
                  display: 'grid',
                  placeItems: 'center',
                  backgroundColor: BRAND.gold,
                  color: BRAND.navy,
                }}
              >
                <AccountBalanceRoundedIcon />
              </Box>
              <Typography variant="h6">Aurora Bank</Typography>
            </Stack>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.6)', maxWidth: 280, lineHeight: 1.8 }}>
              Banca digital construida alrededor de ti. Seguridad, cercanía y
              soluciones para cada etapa de tu vida.
            </Typography>
          </Box>

          {FOOTER_COLUMNS.map((column) => (
            <Box key={column.title}>
              <Typography variant="subtitle2" sx={{ mb: 2, color: BRAND.goldLight }}>
                {column.title}
              </Typography>
              <Stack spacing={1.25}>
                {column.links.map((link) => (
                  <Link
                    key={link}
                    href="#inicio"
                    underline="hover"
                    sx={{ color: 'rgba(255,255,255,0.65)', fontSize: 14, width: 'fit-content' }}
                  >
                    {link}
                  </Link>
                ))}
              </Stack>
            </Box>
          ))}
        </Box>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.28)' }} />
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
         
          spacing={1}
         sx={{ justifyContent: 'space-between' }}>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
            © {CURRENT_YEAR} Aurora Bank. Todos los derechos reservados.
          </Typography>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.5)' }}>
            Hecho para tu tranquilidad financiera.
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}
