import { Box } from '@mui/material'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import StatsSection from './components/StatsSection'
import ProductsSection from './components/ProductsSection'
import SecuritySection from './components/SecuritySection'
import TestimonialsSection from './components/TestimonialsSection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

/** Página de inicio: compone las secciones sin lógica de negocio. */
export default function LandingPage({ onAuth }) {
  return (
    <Box>
      <Header onAuth={onAuth} />
      <Box component="main">
        <HeroSection onAuth={onAuth} />
        <StatsSection />
        <ProductsSection onAuth={onAuth} />
        <SecuritySection onAuth={onAuth} />
        <TestimonialsSection />
        <CtaSection onAuth={onAuth} />
      </Box>
      <Footer />
    </Box>
  )
}
