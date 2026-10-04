import Banner from './Banner';
import Logo, { LogoMark } from './Logo';
import Dock from './Dock';
import HeroComposer from './HeroComposer';
import Stamp from './Stamp';
import Footer from './Footer';
import DemoTransform from './DemoTransform';
import { links, tramites } from './site';

/** Portada (DESIGN.md §8.1): primero preguntar; al bajar, qué es, la demo, los trámites y la extensión. */
export default function Landing({ onAsk }: { onAsk: (query: string) => void }) {
  return (
    <div className="home">
      <Banner />
      <header className="home-bar">
        <a href="/" className="doc-logo" aria-label="Reforma Digital, inicio">
          <Logo size={18} />
        </a>
        <nav aria-label="Principal">
          <a href="/extension">La extensión</a>
          <a href="/propuesta">La propuesta</a>
        </nav>
      </header>
      <main id="main">
        <section className="home-ask" id="preguntar" aria-labelledby="preguntar-title">
          <LogoMark size={36} />
          <h1 id="preguntar-title">¿En qué te puedo ayudar hoy?</h1>
          <HeroComposer onAsk={onAsk} variant="home" />
          <a className="home-more" href="#que-es">
            Qué es Reforma Digital ↓
          </a>
        </section>

        <section className="home-sec" id="que-es" aria-labelledby="que-es-title">
          <h2 id="que-es-title">Te ayudamos con el papeleo de la Administración</h2>
          <p>
            Las webs oficiales están pensadas para quien ya sabe hacer el trámite. Nosotros te lo
            explicamos con palabras normales y te acompañamos en la web oficial hasta terminar.
          </p>
          <ol className="home-steps">
            <li>
              <span>1</span>
              <strong>Pregunta</strong> lo que necesitas, como se lo dirías a alguien.
            </li>
            <li>
              <span>2</span>
              <strong>Te contamos</strong> lo que dice la web oficial y te enseñamos dónde lo dice.
            </li>
            <li>
              <span>3</span>
              <strong>Con la extensión</strong>, esa web oficial se ve más clara mientras haces el
              trámite.
            </li>
          </ol>
        </section>

        <section className="home-sec home-wide" id="demo" aria-labelledby="demo-title">
          <h2 id="demo-title">Mira la diferencia</h2>
          <p>
            Así es una página de la Agencia Tributaria y así se ve con la extensión. Cambia entre
            «Original» y «Mejorada», o busca «renta».
          </p>
          <DemoTransform compact />
        </section>

        <section className="home-sec home-wide" id="tramites" aria-labelledby="tramites-title">
          <h2 id="tramites-title">Trámites que puedes empezar ahora</h2>
          <p>
            Pulsa un sello y te lo explicamos. Los que llevan matasellos tienen además su web
            oficial ordenada por la extensión.
          </p>
          <div className="stamp-wall">
            {tramites.map((t, i) => (
              <Stamp
                key={t.name}
                n={i + 1}
                name={t.name}
                icon={t.icon}
                color={t.color}
                postmarked={t.adaptada}
                question={t.question}
                onSelect={onAsk}
              />
            ))}
          </div>
        </section>

        <section className="home-sec" id="extension" aria-labelledby="extension-title">
          <h2 id="extension-title">Consigue la extensión</h2>
          <p>
            Es un complemento gratuito para Google Chrome. Está en pruebas, así que de momento se
            instala a mano: son cuatro pasos y unos cinco minutos.
          </p>
          <div className="doc-actions">
            <a className="doc-button doc-button-solid" href={links.install}>
              Cómo instalarla
            </a>
            <a className="doc-button" href={links.download}>
              Descargar la versión de prueba
            </a>
          </div>
        </section>

        <section className="home-sec" id="propuesta" aria-labelledby="propuesta-title">
          <h2 id="propuesta-title" className="sr-only">
            La propuesta
          </h2>
          <blockquote>
            Cada época ha tenido su reforma de la Administración. La nuestra es la digital.
          </blockquote>
          <p>
            Reforma Digital es una iniciativa ciudadana y abierta. Proponemos que las webs del
            Estado se diseñen con el mismo cuidado con el que se escribe una ley.
          </p>
          <div className="doc-actions">
            <a className="doc-button" href="/propuesta">
              Leer la propuesta
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <Dock onAsk={onAsk} />
    </div>
  );
}
