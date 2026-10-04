'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { PixelIcon } from '../components/pixel-icon';
import { pages } from './site';

type Item = { href: string; label: string };

/** Menú lateral fijo: páginas del sitio y secciones de la página, con la visible en rojo. */
export default function DocNav({ items, cta }: { items: Item[]; cta: Item }) {
  const pathname = usePathname();
  const [current, setCurrent] = useState(items[0]?.href);
  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector(item.href))
      .filter((el): el is Element => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setCurrent(`#${visible.target.id}`);
      },
      { rootMargin: '-30% 0px -60% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [items]);
  return (
    <nav className="doc-nav" aria-label="Principal">
      <a href="/" className="doc-logo" aria-label="Reforma Digital, inicio">
        <Logo size={18} />
      </a>
      <ul className="doc-pages">
        {pages.map((page) => (
          <li key={page.href}>
            <a href={page.href} aria-current={pathname === page.href ? 'page' : undefined}>
              {page.label}
            </a>
          </li>
        ))}
      </ul>
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} aria-current={current === item.href ? 'true' : undefined}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <a className="doc-button" href={cta.href}>
        <PixelIcon name="arrow-right" />
        {cta.label}
      </a>
    </nav>
  );
}
