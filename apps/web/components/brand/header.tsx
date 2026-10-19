import { cn } from '@reforma-digital/design/lib/utils';
import { buttonVariants } from '@reforma-digital/design/ui/button';

import Link from 'next/link';
import { Icon } from './icon';
import { Logo } from './logo';
import { MobileMenu } from './mobile-menu';

// Pastillas de cristal sin barra detrás. Sin borde, el canto lo marca solo el tono y es igual en
// todas; el hover oscurece con una sombra interior (que sí se anima) y la zona de clic
// crece hasta 40 px sin cambiar la pieza.
const pieza = cn(
  buttonVariants({ variant: 'secondary' }),
  'relative h-8.5 border-0 px-3 bg-secondary/60 backdrop-blur-xl backdrop-saturate-150 hover:bg-secondary/60 hover:backdrop-blur-xl [@media(prefers-reduced-transparency:reduce)]:bg-secondary',
  'shadow-[inset_0_0_0_40px_rgb(0_0_0/0)] hover:shadow-[inset_0_0_0_40px_rgb(0_0_0/0.06)] aria-[current=page]:shadow-[inset_0_0_0_40px_rgb(0_0_0/0.06)]',
  'transition-[box-shadow,scale] duration-150 ease-out active:scale-[0.96] active:not-aria-[haspopup]:translate-y-0 motion-reduce:transition-none',
  'focus-visible:ring-0 focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-foreground',
  'before:absolute before:inset-x-0 before:-inset-y-[3px]',
);
const participar = cn(pieza, 'border border-border bg-background pr-2.5 hover:bg-background');

// Al bajar los primeros 40 px, --pliegue va de 0 a 1 (animación ligada al scroll, sin JS): el
// texto «Reforma Digital» se pliega y la R, sin encoger, queda centrada en un icono blanco de
// 52 × 52 px (27 de la R + 2 × 11,5 de relleno + 2 de borde) con el borde de «Participar»,
// alineado con la columna y con esquinas continuas, como un icono de app. La esquina continua
// necesita más radio (24 px) para verse igual de redonda; sin ella se queda en 14 px.
// Sin `animation-timeline`, la animación dura 0 s y se queda en 1: la R en su pastilla.
const logo =
  'mr-auto -ml-[12.5px] flex h-13 items-center rounded-[14px] supports-[corner-shape:squircle]:rounded-[24px] supports-[corner-shape:squircle]:[corner-shape:squircle] border border-solid px-[11.5px] outline-none bg-[color-mix(in_srgb,var(--background)_calc(100%*var(--pliegue)),transparent)] [border-color:color-mix(in_srgb,var(--border)_calc(100%*var(--pliegue)),transparent)] [translate:calc(12.5px*var(--pliegue))_0] focus-visible:outline-2 focus-visible:outline-solid focus-visible:outline-offset-2 focus-visible:outline-foreground [&_.marca]:[gap:calc(0.5em*(1-var(--pliegue)))] [&_.marca-texto]:overflow-hidden [&_.marca-texto]:[max-width:calc(6em*(1-var(--pliegue)))] [&_.marca-texto]:[opacity:calc(1-var(--pliegue))]';

export function Header({ current }: { current?: string }) {
  const links = [
    { href: '/escritorio', text: 'App', current: current === '/escritorio' },
    { href: '/congreso', text: 'El Congreso', current: current === '/congreso' },
    { href: '/elecciones', text: 'Elecciones', current: current === '/elecciones' },
    { href: '/api', text: 'API', current: current === '/api' },
    { href: '/equipo', text: 'Equipo', current: current === '/equipo' },
  ];

  return (
    <header className="in-nav pointer-events-none sticky top-0 z-40 flex items-center gap-4 min-h-20 [padding:16px_max(var(--page-gutter),_calc((100%_-_var(--container-content))_/_2_+_var(--page-gutter)))] [&_>_*]:pointer-events-auto [&_nav]:flex [&_nav]:items-center [&_nav]:gap-1 [@media(max-width:_800px)]:[&_nav]:hidden [animation-name:cabecera-pliegue] [animation-fill-mode:both] [animation-timing-function:linear] [animation-timeline:scroll()] [animation-range:0_40px] motion-reduce:[animation-timing-function:steps(1,end)]">
      <Link href="/" aria-label="Reforma Digital, portada de la iniciativa" className={logo}>
        <Logo size={36} />
      </Link>
      <nav aria-label="Navegación principal">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            aria-current={link.current ? 'page' : undefined}
            data-slot="button"
            data-variant="secondary"
            className={pieza}
          >
            {link.text}
          </Link>
        ))}
        <Link href="/#participar" data-slot="button" data-variant="outline" className={participar}>
          Participar <Icon name="derecha" size={16} />
        </Link>
      </nav>
      <MobileMenu links={links} />
    </header>
  );
}
