import { CLIENT_ROLE } from '../constants/roles'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const PHONE_PATTERN = /^\+?\d{9,15}$/
const CODE_PATTERN = /^\d{6}$/

export const isBlank = (value) => String(value ?? '').trim().length === 0

export const isValidEmail = (value) => EMAIL_PATTERN.test(String(value ?? '').trim())

export const isValidPhone = (value) =>
  PHONE_PATTERN.test(String(value ?? '').replace(/[\s()-]/g, ''))

/**
 * Evalúa la contraseña con reglas explícitas. Devuelve también el detalle
 * para renderizar una barra de fortaleza reutilizable en registro y recovery.
 */
export function evaluatePassword(value = '') {
  const password = String(value ?? '')
  const rules = [
    { id: 'length', label: 'Mínimo 8 caracteres', ok: password.length >= 8 },
    { id: 'upper', label: 'Una mayúscula', ok: /[A-Z]/.test(password) },
    { id: 'lower', label: 'Una minúscula', ok: /[a-z]/.test(password) },
    { id: 'digit', label: 'Un número', ok: /\d/.test(password) },
    { id: 'special', label: 'Un símbolo', ok: /[^A-Za-z0-9]/.test(password) },
  ]
  const score = rules.filter((rule) => rule.ok).length
  const strength = score <= 2 ? 'Débil' : score <= 4 ? 'Media' : 'Fuerte'

  return { rules, score, strength, isValid: score === rules.length }
}

const addPasswordErrors = (errors, password) => {
  if (isBlank(password)) {
    errors.password = 'Ingresa una contraseña.'
  } else if (!evaluatePassword(password).isValid) {
    errors.password = 'La contraseña no cumple todas las reglas de seguridad.'
  }
}

const addConfirmationErrors = (errors, password, confirmation) => {
  if (isBlank(confirmation)) {
    errors.confirmPassword = 'Confirma tu contraseña.'
  } else if (password !== confirmation) {
    errors.confirmPassword = 'Las contraseñas no coinciden.'
  }
}

export function validateLogin(values) {
  const errors = {}

  if (!isValidEmail(values.email)) {
    errors.email = 'Ingresa un correo electrónico válido.'
  }
  if (isBlank(values.password)) {
    errors.password = 'Ingresa tu contraseña.'
  }

  return { errors, isValid: Object.keys(errors).length === 0 }
}

export function validateRegister(values) {
  const errors = {}

  if (isBlank(values.nombre)) errors.nombre = 'Ingresa tu nombre.'
  if (isBlank(values.apellidos)) errors.apellidos = 'Ingresa tus apellidos.'

  if (isBlank(values.documento)) {
    errors.documento = `Ingresa tu ${CLIENT_ROLE.documentLabel.toLowerCase()}.`
  } else if (!CLIENT_ROLE.documentPattern.test(values.documento.trim())) {
    errors.documento = CLIENT_ROLE.documentHint
  }

  if (!isValidEmail(values.email)) {
    errors.email = 'Ingresa un correo electrónico válido.'
  }
  if (!isValidPhone(values.telefono)) {
    errors.telefono = 'Ingresa un teléfono válido (9 a 15 dígitos).'
  }

  addPasswordErrors(errors, values.password)
  addConfirmationErrors(errors, values.password, values.confirmPassword)

  if (!values.aceptaTerminos) {
    errors.aceptaTerminos = 'Debes aceptar los términos y la política de privacidad.'
  }

  return { errors, isValid: Object.keys(errors).length === 0 }
}

export function validateRecoveryRequest(values) {
  const errors = {}
  if (!isValidEmail(values.email)) {
    errors.email = 'Ingresa el correo asociado a tu cuenta.'
  }
  return { errors, isValid: Object.keys(errors).length === 0 }
}

export function validateRecoveryReset(values) {
  const errors = {}
  if (!CODE_PATTERN.test(String(values.code ?? ''))) {
    errors.code = 'Ingresa el código de 6 dígitos.'
  }
  addPasswordErrors(errors, values.password)
  addConfirmationErrors(errors, values.password, values.confirmPassword)
  return { errors, isValid: Object.keys(errors).length === 0 }
}
