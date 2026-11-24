import { useState } from 'react'
import {
  AppBar,
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Tooltip,
  Typography,
} from '@mui/material'
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded'
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded'
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded'
import LightModeRoundedIcon from '@mui/icons-material/LightModeRounded'
import { NAV_ITEMS } from '../data/landingContent'
import { ROUTES } from '../../../shared/router'
import { useThemeMode } from '../../../theme/ThemeModeProvider'
import { accentText } from '../../../theme'

function ThemeToggle({ sx }) {
  const { mode, toggleMode } = useThemeMode()
  const isDark = mode === 'dark'
  const label = isDark ? 'Activar modo claro' : 'Activar modo oscuro'

  return (
    <Tooltip title={label}>
      <IconButton
        aria-label={label}
        onClick={toggleMode}
        sx={{ color: 'text.primary', ...(sx ?? {}) }}
      >
        {isDark ? <LightModeRoundedIcon /> : <DarkModeRoundedIcon />}
      </IconButton>
    </Tooltip>
  )
}

function Brand() {
  return (
    <Box
      component="a"
      href="#inicio"
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1.25,
        textDecoration: 'none',
        color: 'inherit',
      }}
    >
      <Box
        sx={{
          width: 42,
          height: 42,
          borderRadius: 2,
          display: 'grid',
          placeItems: 'center',
          backgroundColor: 'primary.main',
          color: 'primary.contrastText',
        }}
      >
        <AccountBalanceRoundedIcon />
      </Box>
      <Box>
        <Typography variant="h6" sx={{ lineHeight: 1.05 }}>
          Aurora <Box component="span" sx={{ color: accentText }}>Bank</Box>
        </Typography>
        <Typography variant="caption" color="text.secondary">
          Banca digital
        </Typography>
      </Box>
    </Box>
  )
}

export default function Header({ onAuth }) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const closeDrawer = () => setDrawerOpen(false)

  const goTo = (target) => {
    closeDrawer()
    onAuth(target)
  }

  return (
    <AppBar
      position="sticky"
      elevation={0}
      color="inherit"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark'
            ? 'rgba(19, 37, 58, 0.96)'
            : 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(10px)',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 }, gap: { xs: 1, md: 2 } }}>
          <Brand />

          <Stack
            direction="row"
            spacing={0.5}
            sx={{ display: { xs: 'none', lg: 'flex' }, ml: 'auto' }}
          >
            {NAV_ITEMS.map((item) => (
              <Button key={item.href} href={item.href} color="inherit" sx={{ color: 'text.primary' }}>
                {item.label}
              </Button>
            ))}
          </Stack>

          <Stack
            direction="row"
            spacing={1.25}
            sx={{ display: { xs: 'none', md: 'flex' }, ml: { xs: 0, lg: 'auto' } }}
          >
            <ThemeToggle />
            <Button
              href={ROUTES.LOGIN}
              startIcon={<LoginRoundedIcon />}
              onClick={() => goTo('login')}
              sx={{ color: 'primary.main' }}
            >
              Iniciar sesión
            </Button>
            <Button
              href={ROUTES.REGISTER}
              variant="contained"
              startIcon={<PersonAddAltRoundedIcon />}
              onClick={() => goTo('register')}
            >
              Crear cuenta
            </Button>
          </Stack>

          <IconButton
            aria-label="Abrir menú"
            onClick={() => setDrawerOpen(true)}
            sx={{
              display: { xs: 'inline-flex', lg: 'none' },
              ml: 'auto',
              color: 'primary.main',
            }}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={closeDrawer}
        PaperProps={{ sx: { width: 290, maxWidth: '85vw', p: 2.5 } }}
      >
        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Typography variant="h6">Menú</Typography>
          <Stack direction="row" spacing={0.5}>
            <ThemeToggle />
            <IconButton aria-label="Cerrar menú" onClick={closeDrawer} size="small">
              <CloseRoundedIcon />
            </IconButton>
          </Stack>
        </Stack>
        <Divider sx={{ mb: 1 }} />
        <List>
          {NAV_ITEMS.map((item) => (
            <ListItem key={item.href} disablePadding>
              <ListItemButton component="a" href={item.href} onClick={closeDrawer}>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider sx={{ my: 2 }} />
        <Stack spacing={1.5}>
          <Button
            fullWidth
            href={ROUTES.LOGIN}
            variant="outlined"
            startIcon={<LoginRoundedIcon />}
            onClick={() => goTo('login')}
          >
            Iniciar sesión
          </Button>
          <Button
            fullWidth
            href={ROUTES.REGISTER}
            variant="contained"
            startIcon={<PersonAddAltRoundedIcon />}
            onClick={() => goTo('register')}
          >
            Crear cuenta
          </Button>
        </Stack>
      </Drawer>
    </AppBar>
  )
}
