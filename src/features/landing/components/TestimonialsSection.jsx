import { Avatar, Box, Container, Paper, Rating, Stack, Typography } from '@mui/material'
import FormatQuoteRoundedIcon from '@mui/icons-material/FormatQuoteRounded'
import SectionHeading from './SectionHeading'
import { TESTIMONIALS } from '../data/landingContent'

export default function TestimonialsSection() {
  return (
    <Box id="testimonios" component="section" sx={{ py: { xs: 9, md: 12 } }}>
      <Container maxWidth="lg">
        <SectionHeading
          eyebrow="Testimonios"
          title="Lo que dicen nuestros clientes"
          description="Miles de personas confían en nosotros todos los días para cuidar su dinero."
        />

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
            gap: 3,
          }}
        >
          {TESTIMONIALS.map((testimonial) => (
            <Paper
              key={testimonial.name}
              elevation={0}
              sx={{ p: 3.5, borderRadius: 4, border: '1px solid', borderColor: 'divider' }}
            >
              <FormatQuoteRoundedIcon sx={{ color: 'secondary.main', fontSize: 34 }} />
              <Rating value={testimonial.rating} readOnly size="small" sx={{ mt: 1, mb: 2 }} />
              <Typography variant="body2" sx={{ minHeight: 96, mb: 3, lineHeight: 1.7 }}>
                “{testimonial.quote}”
              </Typography>
              <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
                <Avatar sx={{ bgcolor: 'primary.main', color: 'primary.contrastText' }}>
                  {testimonial.initials}
                </Avatar>
                <Box>
                 <Typography variant="subtitle2" sx={{ fontWeight: 700 }}>
                    {testimonial.name}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {testimonial.role}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          ))}
        </Box>
      </Container>
    </Box>
  )
}
