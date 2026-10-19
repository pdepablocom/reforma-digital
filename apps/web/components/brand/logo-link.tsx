'use client';
import Link from 'next/link';
import { useEffect, useState, type ReactNode } from 'react';

// El logotipo plegado es el icono de la app: a partir de los 40 px en que se pliega, lleva a
// /escritorio en vez de a la portada.
export function LogoLink({ className, children }: { className: string; children: ReactNode }) {
  const [app, setApp] = useState(false);
  useEffect(() => {
    const update = () => setApp(window.scrollY >= 40);
    update();
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return (
    <Link
      href={app ? '/escritorio' : '/'}
      aria-label={
        app ? 'App de escritorio de Reforma Digital' : 'Reforma Digital, portada de la iniciativa'
      }
      className={className}
    >
      {children}
    </Link>
  );
}
