import { Fragment } from 'react';

import Logo from './Logo';
import { authors, links } from './site';

export default function Footer() {
  return (
    <footer className="doc-footer">
      <div>
        <Logo size={16} />
      </div>
      <div>
        <a href={links.repo}>GitHub</a>
        <a href="/propuesta">La propuesta</a>
        <a href={links.contributing}>Contribuir</a>
      </div>
      <div>
        <a href="/privacy">Privacidad</a>
        <a href={links.security}>Seguridad</a>
        <a href={links.license}>Licencia MIT · 2026</a>
      </div>
      <div>
        <p>
          Proyecto independiente y comunitario, sin vinculación con la Administración. Los trámites
          se completan siempre en la web oficial.
        </p>
        <p>
          Hecho por{' '}
          {authors.map((author, index) => (
            <Fragment key={author.href}>
              {index === authors.length - 1 ? ' y ' : index > 0 ? ', ' : null}
              <a href={author.href} target="_blank" rel="noopener noreferrer">
                {author.name}
                <span className="sr-only"> (se abre en una pestaña nueva)</span>
              </a>
            </Fragment>
          ))}
        </p>
      </div>
    </footer>
  );
}
