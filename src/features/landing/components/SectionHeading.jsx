import { Box, Chip, Typography } from '@mui/material'

/** Encabezado reutilizable para las secciones de contenido. */
export default function SectionHeading({ eyebrow, title, description, align = 'center' }) {
  const centered = align === 'center'

  return (
    <Box sx={{ mb: { xs: 5, md: 7 }, textAlign: centered ? 'center' : 'left' }}>
      <Chip
        label={eyebrow}
        color="secondary"
        variant="outlined"
        size="small"
        sx={{ mb: 2, bgcolor: 'rgba(201, 162, 39, 0.1)' }}
      />
      <Typography
        variant="h3"
        component="h2"
        sx={{ fontSize: { xs: '2rem', md: '2.6rem' }, mb: 1.5 }}
      >
        {title}
      </Typography>
      {description && (
        <Typography
          color="text.secondary"
          sx={{ maxWidth: centered ? 680 : 560, mx: centered ? 'auto' : 0, fontSize: 17 }}
        >
          {description}
        </Typography>
      )}
    </Box>
  )
}
