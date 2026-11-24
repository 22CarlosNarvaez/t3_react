/**
 * Configuración única de los dos perfiles soportados.
 * Los componentes de validación leen desde aquí, por lo que agregar un rol
 * nuevo no obliga a duplicar formularios.
 */
export const ROLE_IDS = {
  CLIENTE: 'cliente',
  ADMINISTRADOR: 'administrador',
}

export const ROLES = [
  {
    id: ROLE_IDS.CLIENTE,
    label: 'Cliente',
    shortLabel: 'Banca personal',
    description: 'Cuentas, tarjetas y servicios para ti y tu familia.',
    icon: 'cliente',
    documentLabel: 'DNI / NIE',
    documentPlaceholder: '12345678Z',
    documentHint: '8 dígitos y una letra, o X/Y/Z + 7 dígitos y una letra.',
    documentPattern: /^(?:\d{8}|[XYZ]\d{7})[A-Z]$/i,
    accountPrefix: 'CL',
    greeting: 'Bienvenido a tu banca personal',
  },
  {
    id: ROLE_IDS.ADMINISTRADOR,
    label: 'Administrador',
    shortLabel: 'Personal interno',
    description: 'Herramientas de gestión y administración de la entidad.',
    icon: 'administrador',
    documentLabel: 'Código de empleado',
    documentPlaceholder: 'ADM-2024',
    documentHint: 'Formato ADM-0000.',
    documentPattern: /^ADM-\d{4}$/i,
    accountPrefix: 'ADM',
    greeting: 'Panel de gestión Aurora Bank',
  },
]

export const getRole = (roleId) =>
  ROLES.find((role) => role.id === roleId) ?? ROLES[0]
