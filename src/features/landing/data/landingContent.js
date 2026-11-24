/**
 * Contenido de la landing separado de la presentación.
 * Las claves `icon` se resuelven en cada componente para mantener los datos
 * serializables y desacoplados de Material UI.
 */
export const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Productos', href: '#productos' },
  { label: 'Seguridad', href: '#seguridad' },
  { label: 'Testimonios', href: '#testimonios' },
]

export const STATS = [
  { value: '+250 mil', label: 'Clientes activos' },
  { value: '$4.8B', label: 'Activos administrados' },
  { value: '12', label: 'Países presentes' },
  { value: '98%', label: 'Satisfacción' },
]

export const PRODUCTS = [
  {
    icon: 'ahorros',
    title: 'Cuenta de ahorros',
    description:
      'Haz crecer tu dinero con una cuenta sin comisiones y disponibilidad inmediata.',
    tag: 'Sin comisiones',
  },
  {
    icon: 'corriente',
    title: 'Cuenta corriente',
    description:
      'Administra tus ingresos y egresos con transferencias ilimitadas y chequera digital.',
    tag: 'Transferencias gratis',
  },
  {
    icon: 'tarjetas',
    title: 'Tarjetas inteligentes',
    description:
      'Débito y crédito con control total, recompensas y pagos sin contacto en todo el mundo.',
    tag: 'Recompensas',
  },
  {
    icon: 'prestamos',
    title: 'Préstamos',
    description:
      'Financia tus proyectos con tasas competitivas y aprobación 100% en línea.',
    tag: 'Aprobación rápida',
  },
  {
    icon: 'inversiones',
    title: 'Inversiones',
    description:
      'Diversifica tu portafolio con productos gestionados por especialistas.',
    tag: 'Desde $100',
  },
  {
    icon: 'movil',
    title: 'Banca móvil',
    description:
      'Toda nuestra banca en tu bolsillo: consulta, transfiere y paga en segundos.',
    tag: 'Disponible 24/7',
  },
]

export const SECURITY_FEATURES = [
  {
    icon: 'cifrado',
    title: 'Cifrado de extremo a extremo',
    description:
      'Tus datos viajan protegidos con los más altos estándares de la industria.',
  },
  {
    icon: 'biometria',
    title: 'Acceso biométrico',
    description:
      'Ingresa con huella o reconocimiento facial desde cualquier dispositivo.',
  },
  {
    icon: 'monitoreo',
    title: 'Monitoreo en tiempo real',
    description:
      'Detectamos y bloqueamos operaciones sospechosas antes de que ocurran.',
  },
  {
    icon: 'verificacion',
    title: 'Verificación de identidad',
    description:
      'Validamos cada acceso con mecanismos de doble factor y código único.',
  },
]

export const TESTIMONIALS = [
  {
    initials: 'MR',
    name: 'María Rodríguez',
    role: 'Cliente desde 2019',
    quote:
      'Abrí mi cuenta en minutos y nunca tuve un problema. La app es clara y las transferencias son inmediatas.',
    rating: 5,
  },
  {
    initials: 'JL',
    name: 'Javier López',
    role: 'Cliente desde 2021',
    quote:
      'El equipo de seguridad detectó un cargo extraño y lo bloqueó el mismo día. Eso es tranquilidad de verdad.',
    rating: 5,
  },
  {
    initials: 'AP',
    name: 'Ana Pereira',
    role: 'Cliente desde 2023',
    quote:
      'Los productos de inversión son muy accesibles y el acompañamiento profesional hizo toda la diferencia.',
    rating: 5,
  },
]

export const FOOTER_COLUMNS = [
  {
    title: 'Productos',
    links: ['Cuentas', 'Tarjetas', 'Préstamos', 'Inversiones'],
  },
  {
    title: 'Empresa',
    links: ['Sobre nosotros', 'Trabaja con nosotros', 'Sala de prensa'],
  },
  {
    title: 'Ayuda',
    links: ['Centro de ayuda', 'Seguridad', 'Contacto'],
  },
]
