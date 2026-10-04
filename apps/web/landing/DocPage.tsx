import type { ReactNode } from 'react';
import Banner from './Banner';
import DocNav from './DocNav';
import Footer from './Footer';
import './landing.css';

type Item = { href: string; label: string };

/** Envoltorio de las páginas Documento (DESIGN.md §8.2): retícula, menú lateral, columna y pie. */
export default function DocPage({
  items,
  cta,
  children,
}: {
  items: Item[];
  cta: Item;
  children: ReactNode;
}) {
  return (
    <div className="doc">
      <div className="doc-guides" aria-hidden="true" />
      <Banner />
      <div className="doc-grid">
        <DocNav items={items} cta={cta} />
        <main id="main" className="full-article">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
