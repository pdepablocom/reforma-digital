'use client';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuLinkItem,
  ContextMenuTrigger,
} from '@reforma-digital/design/ui/context-menu';
import Link from 'next/link';
import type { MouseEvent, ReactNode } from 'react';

// Plegado, el logotipo es un icono: un clic vuelve arriba en vez de cambiar de página. Con el
// botón derecho (o pulsación larga) se elige entre la portada y la app de escritorio.
export function LogoLink({ className, children }: { className: string; children: ReactNode }) {
  function onClick(event: MouseEvent) {
    const modified = event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
    if (modified || window.scrollY < 40) return;
    event.preventDefault();
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduce ? 'auto' : 'smooth' });
  }
  return (
    <ContextMenu>
      <ContextMenuTrigger
        render={
          <Link
            href="/"
            aria-label="Reforma Digital, portada de la iniciativa"
            className={className}
            onClick={onClick}
          />
        }
      >
        {children}
      </ContextMenuTrigger>
      <ContextMenuContent>
        <ContextMenuLinkItem render={<Link href="/" />}>Ir a la portada</ContextMenuLinkItem>
        <ContextMenuLinkItem render={<Link href="/escritorio" />}>
          Abrir la app de escritorio
        </ContextMenuLinkItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}
