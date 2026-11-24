import { Box, Container, Paper, Typography } from '@mui/material'
import { STATS } from '../data/landingContent'

export default function StatsSection() {
  return (
    <Container maxWidth="lg" sx={{ mt: { xs: -10, md: -12 }, position: 'relative', zIndex: 1 }}>
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          borderRadius: 4,
          border: '1px solid',
          borderColor: 'divider',
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, minmax(0, 1fr))', md: 'repeat(4, minmax(0, 1fr))' },
          gap: { xs: 3, md: 0 },
        }}
      >
        {STATS.map((stat, index) => (
          <Box
            key={stat.label}
            sx={{
              textAlign: 'center',
              px: { md: 2 },
              borderLeft: { xs: 0, md: index === 0 ? 0 : 1 },
              borderTop: { xs: index % 2 === 0 ? 0 : 1, md: 0 },
              borderColor: 'divider',
            }}
          >
            <Typography variant="h4" color="primary.main" sx={{ mb: 0.5 }}>
              {stat.value}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {stat.label}
            </Typography>
          </Box>
        ))}
      </Paper>
    </Container>
  )
}
