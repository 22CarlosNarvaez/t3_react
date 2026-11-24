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
  line: '#A9BDD2',
}

const lightPalette = {
  mode: 'light',
  primary: {
    main: BRAND.navy,
    dark: BRAND.navyDark,
    light: BRAND.navyLight,
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#8A6A00',
    light: BRAND.gold,
    dark: '#6B4E00',
    contrastText: '#FFFFFF',
  },
  success: { main: '#2E7D5B' },
  warning: { main: '#B26A00' },
  background: { default: BRAND.surface, paper: '#FFFFFF' },
  text: { primary: BRAND.ink, secondary: BRAND.muted },
  divider: BRAND.line,
}

const darkPalette = {
  mode: 'dark',
  primary: {
    main: '#79A9DE',
    dark: '#3C6B9E',
    light: '#A8CCF0',
    contrastText: '#041225',
  },
  secondary: {
    main: BRAND.goldLight,
    light: '#F2D98A',
    dark: BRAND.gold,
    contrastText: BRAND.navyDark,
  },
  success: { main: '#66BB8A' },
  warning: { main: '#E0A83E' },
  error: { main: '#FF8A80' },
  background: { default: '#0B1726', paper: '#13253A' },
  text: { primary: '#E8F0FA', secondary: '#A8BCD2' },
  divider: '#47617E',
}

/** Color de acento legible según el modo (etiquetas y detalles dorados). */
export const accentText = (theme) =>
  theme.palette.mode === 'dark' ? 'secondary.main' : 'secondary.dark'

/** Tema configurable por modo; lo usa el proveedor global. */
export const createAppTheme = (mode = 'light') =>
  createTheme({
    palette: mode === 'dark' ? darkPalette : lightPalette,
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
      MuiButton: {
        defaultProps: { disableElevation: true },
        styleOverrides: {
          root: { borderRadius: 10, paddingInline: 20 },
          contained: { boxShadow: '0 10px 24px rgba(0, 0, 0, 0.18)' },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 18,
            border: '1px solid',
            borderColor: theme.palette.divider,
            boxShadow: '0 12px 32px rgba(0, 0, 0, 0.12)',
            backgroundImage: 'none',
          }),
        },
      },
      MuiPaper: {
        styleOverrides: { root: { backgroundImage: 'none' } },
      },
      MuiOutlinedInput: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 10,
            backgroundColor: theme.palette.background.paper,
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.divider,
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main,
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              borderColor: theme.palette.primary.main,
              borderWidth: 2,
            },
          }),
        },
      },
      MuiChip: {
        styleOverrides: { root: { fontWeight: 700 } },
      },
    },
  })
