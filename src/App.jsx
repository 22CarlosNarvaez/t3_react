import { useCallback, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { LandingPage } from './features/landing'
import { AuthPage } from './features/auth'
import DashboardPage from './features/dashboard/DashboardPage'
import { AUTH_ROUTES, RESOLVE_ROUTE_PLACEHOLDER } from './shared/router'

// placeholder se elimina en el siguiente paso
