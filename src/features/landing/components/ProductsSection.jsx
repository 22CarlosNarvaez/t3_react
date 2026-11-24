import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from '@mui/material'
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded'
import AccountBalanceWalletRoundedIcon from '@mui/icons-material/AccountBalanceWalletRounded'
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded'
import RequestQuoteRoundedIcon from '@mui/icons-material/RequestQuoteRounded'
import ShowChartRoundedIcon from '@mui/icons-material/ShowChartRounded'
import SmartphoneRoundedIcon from '@mui/icons-material/SmartphoneRounded'
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded'
import SectionHeading from './SectionHeading'
import { PRODUCTS } from '../data/landingContent'

const ICONS = {
  ahorros: SavingsRoundedIcon,
  corriente: AccountBalanceWalletRoundedIcon,
  tarjetas: CreditCardRoundedIcon,
  prestamos: RequestQuoteRoundedIcon,
  inversiones: ShowChartRoundedIcon,
  movil: SmartphoneRoundedIcon,
}

export default function ProductsSection({ onAuth }) {
  return (
    <Box id="productos" component="section" sx={{ py: { xs: 9, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Nuestros productos"
          title="Soluciones para cada meta"
          description="Diseñamos productos financieros que se adaptan a tu día a día y a tus planes a largo plazo."
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, minmax(0, 1fr))', lg: 'repeat(3, minmax(0, 1fr))' },
            gap: 3,
          }}
        >
          {PRODUCTS.map((product) => {
            const Icon = ICONS[product.icon]
            return (
              <Card
                key={product.title}
                sx={{
                  p: 1,
                  transition: 'transform 0.2s ease, box-shadow 0.2s ease',
                  '&:hover': {
                    transform: 'translateY(-6px)',
                    boxShadow: '0 20px 40px rgba(16, 42, 67, 0.14)',
                  },
                }}
              >
                <CardContent sx={{ p: 3, '&:last-child': { pb: 3 } }}>
                  <Box
                    sx={{
                      width: 52,
                      height: 52,
                      borderRadius: 2.5,
                      display: 'grid',
                      placeItems: 'center',
                      backgroundColor: 'rgba(11, 31, 58, 0.06)',
                      color: 'primary.main',
                      mb: 2.5,
                    }}
                  >
                    <Icon fontSize="large" />
                  </Box>
                  <Stack direction="row" spacing={1} sx={{ alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <Typography variant="h6" gutterBottom>
                      {product.title}
                    </Typography>
                  </Stack>
                  <Chip label={product.tag} size="small" color="secondary" variant="outlined" sx={{ mb: 2 }} />
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 3, minHeight: 60 }}>
                    {product.description}
                  </Typography>
                  <Button
                    variant="text"
                    endIcon={<ArrowForwardRoundedIcon />}
                    onClick={() => onAuth('register')}
                    sx={{ p: 0, color: 'primary.main' }}
                  >
                    Conocer más
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </Box>
      </Container>
    </Box>
  )
}
