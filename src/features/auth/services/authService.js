import { getRole } from '../constants/roles'

/**
 * Servicio de autenticación simulado.
 * Punto único de integración: para conectar un backend real solo se cambia
 * este archivo, sin tocar los componentes ni las reglas de validación.
 */
const DEMO_CODE = '123456'
const wait = (ms = 700) => new Promise((resolve) => setTimeout(resolve, ms))

const buildSession = (values, role) => ({
  id: `${role.accountPrefix}-${Date.now().toString().slice(-6)}`,
  nombre: values.nombre?.trim() || values.email.split('@')[0],
  apellidos: values.apellidos?.trim() ?? '',
  email: values.email.trim(),
  rol: role.id,
  rolLabel: role.label,
})

export const authService = {
  async login(values) {
    await wait()
    const role = getRole(values.role)
    return {
      severity: 'success',
      message: `Sesión iniciada correctamente como ${role.label}.`,
      user: buildSession(values, role),
    }
  },

  async register(values) {
    await wait(900)
    const role = getRole(values.role)
    return {
      severity: 'success',
      message: `Tu cuenta de ${role.label.toLowerCase()} fue creada correctamente.`,
      user: buildSession(values, role),
    }
  },

  async requestRecovery(values) {
    await wait()
    return {
      severity: 'success',
      message: `Enviamos un código de recuperación a ${values.email.trim()}.`,
      email: values.email.trim(),
      demoCode: DEMO_CODE,
    }
  },

  async resetPassword() {
    await wait()
    return {
      severity: 'success',
      message: 'Tu contraseña fue actualizada. Ya puedes iniciar sesión.',
    }
  },
}

export { DEMO_CODE }
