import { createTheme } from '@mui/material/styles'

/**
 * Paleta de marca centralizada. Se consume desde los `sx` para no depender
 * de archivos CSS externos: todo el diseño vive en Material UI.
 */
export const BRAND = {
  navy: '#0B1F3A',
  navyDark: '#061426',
  navyLight: '#173A5E',
  gold: '#C9A227',
  goldLight: '#E3C45C',
  surface: '#F5F8FC',
  ink: '#102A43',
  muted: '#486581',
  line: '#DCE6F1',
}

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: BRAND.navy,
      dark: BRAND.navyDark,
      light: BRAND.navyLight,
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: BRAND.gold,
      light: BRAND.goldLight,
      dark: '#9A7B12',
      contrastText: BRAND.navy,
    },
    success: { main: '#2E7D5B' },
    warning: { main: '#B26A00' },
    background: {
      default: BRAND.surface,
      paper: '#FFFFFF',
    },
    text: {
      primary: BRAND.ink,
      secondary: BRAND.muted,
    },
    divider: BRAND.line,
  },
  typography: {
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.025em' },
    h2: { fontWeight: 800, letterSpacing: '-0.02em' },
    h3: { fontWeight: 800, letterSpacing: '-0.015em' },
    h4: { fontWeight: 700 },
    h5: { fontWeight: 700 },
    h6: { fontWeight: 700 },
    subtitle1: { fontWeight: 500 },
    button: { fontWeight: 700, textTransform: 'none' },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: { backgroundColor: BRAND.surface },
      },
    },
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: { borderRadius: 10, paddingInline: 20 },
        contained: { boxShadow: '0 10px 24px rgba(11, 31, 58, 0.16)' },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 18,
          boxShadow: '0 12px 32px rgba(16, 42, 67, 0.08)',
          backgroundImage: 'none',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: { backgroundImage: 'none' },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: { borderRadius: 10, backgroundColor: '#FFFFFF' },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: { fontWeight: 700 },
      },
    },
  },
})
