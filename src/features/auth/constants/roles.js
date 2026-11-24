/**
 * Configuración del único perfil soportado: cliente de banca personal.
 * No existe sesión de administrador en esta aplicación.
 */
export const CLIENT_ROLE = {
  id: 'cliente',
  label: 'Cliente',
  shortLabel: 'Banca personal',
  documentLabel: 'DNI / NIE',
  documentPlaceholder: '12345678Z',
  documentHint: '8 dígitos y una letra, o X/Y/Z + 7 dígitos y una letra.',
  documentPattern: /^(?:\d{8}|[XYZ]\d{7})[A-Z]$/i,
  accountPrefix: 'CL',
  greeting: 'Bienvenido a tu banca personal',
}
