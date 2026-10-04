import type { PixelIconName } from '../components/pixel-icon';

const repo = 'https://github.com/samuelcorsan/reforma-digital';

export const links = {
  repo,
  install: '/extension#instalar',
  /** Versión de prueba 0.1.0: incluye solo DNI y Extranjería (notas de la release). */
  download: `${repo}/releases/download/v0.1.0-pre-alpha/reforma-digital-0.1.0.zip`,
  release: `${repo}/releases/tag/v0.1.0-pre-alpha`,
  architecture: `${repo}/blob/main/docs/ARCHITECTURE.md`,
  design: `${repo}/blob/main/DESIGN.md`,
  contributing: `${repo}/blob/main/CONTRIBUTING.md`,
  security: `${repo}/blob/main/SECURITY.md`,
  license: `${repo}/blob/main/LICENSE`,
  hacienda: `${repo}/tree/main/sites/hacienda`,
  extranjeria: `${repo}/tree/main/sites/extranjeria`,
  dni: `${repo}/tree/main/sites/dni`,
};

export const authors = [
  { name: 'Leo', href: 'https://x.com/mrloldev' },
  { name: 'Samu', href: 'https://x.com/disamdev' },
  { name: 'Pablo', href: 'https://x.com/pdepablocom' },
];

type NavItem = { href: string; label: string };

/** Páginas del sitio (barra superior de la portada y cabecera del menú lateral). */
export const pages: NavItem[] = [
  { href: '/', label: 'Preguntar' },
  { href: '/extension', label: 'La extensión' },
  { href: '/propuesta', label: 'La propuesta' },
];

export const propuestaNav: NavItem[] = [
  { href: '#resumen', label: 'Resumen' },
  { href: '#situacion', label: 'Situación' },
  { href: '#problema', label: 'Problema' },
  { href: '#solucion', label: 'Solución' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#beneficio', label: 'Beneficio' },
  { href: '#horizonte', label: 'Horizonte' },
  { href: '#participar', label: 'Participar' },
];

export const extensionNav: NavItem[] = [
  { href: '#que-hace', label: 'Qué hace' },
  { href: '#pruebalo', label: 'Pruébalo' },
  { href: '#instalar', label: 'Cómo instalarla' },
  { href: '#donde', label: 'Dónde funciona' },
  { href: '#que-no-hace', label: 'Qué no hace' },
];

/** Sellos de la portada: cada uno abre el chat con la pregunta escrita. `adaptada`: la versión descargable ordena su web. */
export const tramites: {
  name: string;
  icon: PixelIconName;
  color: string;
  question: string;
  adaptada: boolean;
}[] = [
  {
    name: 'Hacienda',
    icon: 'mail',
    color: '#a50e0e',
    question: '¿Cómo pido cita en la Agencia Tributaria?',
    adaptada: false,
  },
  {
    name: 'Extranjería',
    icon: 'card-text',
    color: '#2d5a9e',
    question: '¿Cómo pido cita previa para renovar mi tarjeta de residencia?',
    adaptada: true,
  },
  {
    name: 'DNI',
    icon: 'user',
    color: '#141414',
    question: '¿Cómo pido cita para renovar el DNI?',
    adaptada: true,
  },
  {
    name: 'Asociaciones',
    icon: 'users',
    color: '#df1717',
    question: '¿Cómo compruebo si el nombre de mi asociación está libre?',
    adaptada: false,
  },
  {
    name: 'Cita médica',
    icon: 'cross-solid',
    color: '#2f7a50',
    question: '¿Cómo pido cita con mi médico de cabecera?',
    adaptada: false,
  },
  {
    name: 'Padrón',
    icon: 'home',
    color: '#8a6400',
    question: '¿Cómo me empadrono en mi ciudad?',
    adaptada: false,
  },
];

/** Copia de sites/<id>/site.config.json para la tabla de sedes. `incluida`: está en la versión descargable 0.1.0. */
export const sedes = [
  {
    name: 'Agencia Tributaria',
    incluida: false,
    tramite: 'Asistencia y Cita',
    verified: '27 sep 2026',
    href: `${repo}/tree/main/sites/hacienda`,
  },
  {
    name: 'Extranjería',
    incluida: true,
    tramite: 'Cita previa',
    verified: '27 sep 2026',
    href: `${repo}/tree/main/sites/extranjeria`,
  },
  {
    name: 'Ministerio del Interior',
    incluida: false,
    tramite: 'Consulta de asociaciones',
    verified: '27 sep 2026',
    href: `${repo}/tree/main/sites/registro-asociaciones`,
  },
  {
    name: 'Policía Nacional',
    incluida: true,
    tramite: 'Cita previa DNI y pasaporte',
    verified: '10 sep 2026',
    href: `${repo}/tree/main/sites/dni`,
  },
];

/** Pasos de la aplicación oficial «Asistencia y Cita» de la Agencia Tributaria (sept. 2026). */
export const pasos = [
  'Tipo de cita y servicio',
  'Para quién',
  'Para qué',
  'Selección de cita',
  'Confirmación',
];

/** Normaliza para buscar sin tildes ni arrobas: «clave» encuentra «Cl@ve». */
export const normalize = (s: string) =>
  s
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/@/g, 'a')
    .toLowerCase();
