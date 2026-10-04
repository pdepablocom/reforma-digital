import Link from 'next/link';
import { LogoMark } from '../landing/Logo';
import { links } from '../landing/site';

export function ProjectBrand() {
  return (
    <>
      <LogoMark size={20} />
      <span>Reforma Digital</span>
    </>
  );
}
export function ProjectFooter() {
  return (
    <footer className="project-footer">
      <div className="project-footer-top">
        <Link href="/" className="project-brand" aria-label="Reforma Digital, inicio">
          <ProjectBrand />
        </Link>
        <nav aria-label="Información del proyecto">
          <Link href="/extension">La extensión</Link>
          <Link href="/propuesta">La propuesta</Link>
          <Link href="/sources">Fuentes oficiales</Link>
          <Link href="/privacy">Privacidad</Link>
          <a href={links.repo}>GitHub ↗</a>
        </nav>
      </div>
      <div className="project-footer-bottom">
        <p>Hecho en comunidad. Para lo que nos pertenece a todos.</p>
        <p>Proyecto independiente · Código abierto · Licencia MIT</p>
      </div>
    </footer>
  );
}
