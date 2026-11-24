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
  Typography,
} from '@mui/material'
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded'
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded'
import { NAV_ITEMS } from '../data/landingContent'
import { BRAND } from '../../../theme'

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
          color: BRAND.goldLight,
        }}
      >
        <AccountBalanceRoundedIcon />
      </Box>
      <Box>
        <Typography variant="h6" sx={{ lineHeight: 1.05 }}>
          Aurora <Box component="span" sx={{ color: 'secondary.dark' }}>Bank</Box>
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
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.96)',
        backdropFilter: 'blur(10px)',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 64, md: 72 }, gap: 2 }}>
          <Brand />

          <Stack
            direction="row"
            spacing={0.5}
            sx={{ display: { xs: 'none', md: 'flex' }, ml: 'auto' }}
          >
            {NAV_ITEMS.map((item) => (
              <Button key={item.href} href={item.href} color="inherit" sx={{ color: 'text.primary' }}>
                {item.label}
              </Button>
            ))}
          </Stack>

          <Stack direction="row" spacing={1.25} sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              startIcon={<LoginRoundedIcon />}
              onClick={() => goTo('login')}
              sx={{ color: 'primary.main' }}
            >
              Iniciar sesión
            </Button>
            <Button
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
            sx={{ display: { xs: 'inline-flex', md: 'none' }, ml: 'auto', color: 'primary.main' }}
          >
            <MenuRoundedIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={closeDrawer}
        PaperProps={{ sx: { width: 290, p: 2.5 } }}
      >
        <Stack direction="row" sx={{ alignItems: 'center', justifyContent: 'space-between',  mb: 2 }}>
          <Typography variant="h6">Menú</Typography>
          <IconButton aria-label="Cerrar menú" onClick={closeDrawer} size="small">
            <CloseRoundedIcon />
          </IconButton>
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
          <Button fullWidth variant="outlined" startIcon={<LoginRoundedIcon />} onClick={() => goTo('login')}>
            Iniciar sesión
          </Button>
          <Button
            fullWidth
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
