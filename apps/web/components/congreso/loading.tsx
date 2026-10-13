export function DataLoading() {
  return (
    <div role="status" className="cg-loading">
      <span className="sr-only">Cargando datos del Congreso…</span>
      <div className="cg-grid" aria-hidden="true">
        {[0, 1, 2].map((card) => (
          <div className="cg-card" key={card}>
            <div className="cg-loading-line" />
            <div className="cg-loading-line" />
            <div className="cg-loading-line" />
          </div>
        ))}
      </div>
    </div>
  );
}
