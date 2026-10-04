import type { Metadata } from 'next';
import DocPage from '../../../landing/DocPage';
import Figure from '../../../landing/Figure';
import DemoTransform from '../../../landing/DemoTransform';
import { extensionNav, links, sedes } from '../../../landing/site';

export const metadata: Metadata = {
  title: 'La extensión · Reforma Digital',
  description:
    'Un complemento gratuito para Google Chrome que ordena las webs de la Administración mientras haces el trámite. Cómo funciona y cómo instalarlo.',
  robots: { index: true, follow: true },
};

export default function Extension() {
  return (
    <DocPage
      items={extensionNav}
      cta={{ href: links.download, label: 'Descargar la versión de prueba' }}
    >
      <section className="doc-sec" id="que-hace" aria-labelledby="que-hace-title">
        <span className="doc-n" aria-hidden="true">
          01
        </span>
        <h1 id="que-hace-title">La extensión ordena la web oficial mientras haces el trámite.</h1>
        <p>
          Es un complemento gratuito para Google Chrome. Cuando entras en una web de la
          Administración que conocemos, te enseña los pasos que quedan, te deja buscar lo que
          necesitas y pone delante los avisos importantes.
        </p>
        <p>
          No cambia nada de lo que pide la Administración. Los botones, los avisos y el envío siguen
          siendo los de la web oficial.
        </p>
      </section>

      <section className="doc-sec" id="pruebalo" aria-labelledby="pruebalo-title">
        <span className="doc-n" aria-hidden="true">
          02
        </span>
        <h2 id="pruebalo-title">Mira la diferencia</h2>
        <p>
          A la izquierda, una página de la Agencia Tributaria tal y como es. A la derecha, la misma
          página con la extensión. Prueba a buscar «renta» o «clave».
        </p>
        <Figure
          n={1}
          wide
          caption={
            <>
              Recreación de Asistencia y Cita de la Agencia Tributaria con sus servicios reales.
              Esta web todavía no está en la versión de prueba.
            </>
          }
        >
          <DemoTransform />
        </Figure>
      </section>

      <section className="doc-sec" id="instalar" aria-labelledby="instalar-title">
        <span className="doc-n" aria-hidden="true">
          03
        </span>
        <h2 id="instalar-title">Cómo instalarla</h2>
        <p>
          Mientras la publicamos en la tienda de Chrome, se instala a mano. Son cuatro pasos y unos
          cinco minutos. Necesitas un ordenador con Google Chrome 120 o posterior.
        </p>
        <ol className="doc-steps">
          <li>
            <strong>Descarga el archivo y ábrelo.</strong> En Mac se convierte en una carpeta al
            hacer doble clic. En Windows, pulsa con el botón derecho y elige «Extraer todo».
          </li>
          <li>
            En Chrome, escribe <strong>chrome://extensions</strong> en la barra de direcciones y
            pulsa Intro.
          </li>
          <li>
            Activa <strong>Modo de desarrollador</strong>, arriba a la derecha.
          </li>
          <li>
            Pulsa <strong>Cargar descomprimida</strong> y elige la carpeta del primer paso.
          </li>
        </ol>
        <p>
          Ya está. Entra en la cita previa del DNI o en la de Extranjería y verás el panel. Si algo
          no encaja, la extensión se retira y te deja la web original.
        </p>
        <div className="doc-actions">
          <a className="doc-button doc-button-solid" href={links.download}>
            Descargar la versión de prueba
          </a>
          <a className="doc-button" href={links.release}>
            Notas de la versión ↗
          </a>
        </div>
      </section>

      <section className="doc-sec" id="donde" aria-labelledby="donde-title">
        <span className="doc-n" aria-hidden="true">
          04
        </span>
        <h2 id="donde-title">Dónde funciona</h2>
        <p>
          Estas son las webs oficiales que sabe ordenar. Las revisamos una a una y todas están en
          pruebas.
        </p>
        <table className="doc-table">
          <caption>Webs oficiales · octubre de 2026</caption>
          <thead>
            <tr>
              <th scope="col">N.º</th>
              <th scope="col">Web</th>
              <th scope="col">En la versión de prueba</th>
              <th scope="col">Revisada</th>
            </tr>
          </thead>
          <tbody>
            {sedes.map((s, i) => (
              <tr key={s.href}>
                <td>{i + 1}</td>
                <td>
                  {s.name} <small>{s.tramite}</small>
                </td>
                <td>{s.incluida ? 'Sí' : 'Próximamente'}</td>
                <td>{s.verified}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="doc-sec" id="que-no-hace" aria-labelledby="que-no-hace-title">
        <span className="doc-n" aria-hidden="true">
          05
        </span>
        <h2 id="que-no-hace-title">Lo que no hace</h2>
        <ul className="doc-steps doc-list">
          <li>No rellena tus datos.</li>
          <li>No resuelve el CAPTCHA ni entra en Cl@ve por ti.</li>
          <li>No envía formularios: el botón de enviar es siempre el de la web oficial.</li>
          <li>
            No guarda lo que escribes. Solo recuerda si la tienes activada en cada web, y no tiene
            servidores propios.
          </li>
        </ul>
        <p>
          Más detalles en <a href="/privacy">privacidad</a> y en{' '}
          <a href="/propuesta#como-funciona">cómo funciona</a>.
        </p>
      </section>
    </DocPage>
  );
}
