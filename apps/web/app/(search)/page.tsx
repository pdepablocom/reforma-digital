import type { Metadata } from 'next';
import LandingHome from '../../components/landing-home';

export const dynamic = 'force-dynamic';
export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_ORIGIN || 'http://localhost:3000'),
  title: 'Reforma Digital · Te ayudamos con el papeleo de la Administración',
  description:
    'Pregunta por un trámite y te explicamos con palabras normales lo que dice la web oficial. Con la extensión gratuita para Chrome, esa web se ve más clara.',
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Reforma Digital · Te ayudamos con el papeleo de la Administración',
    description:
      'Pregunta por un trámite y te explicamos con palabras normales lo que dice la web oficial.',
    images: ['/og.png'],
    locale: 'es_ES',
    type: 'website',
  },
  icons: { icon: '/favicon.svg' },
};
export default function HomePage() {
  return <LandingHome />;
}
