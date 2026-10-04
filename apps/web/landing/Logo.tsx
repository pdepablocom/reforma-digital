/** La R de Reforma Digital: retícula de 3 × 4 casillas con la esquina doblada. */
export function LogoMark({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={(size * 3) / 4}
      height={size}
      viewBox="0 0 144 192"
      aria-hidden="true"
      style={{ shapeRendering: 'crispEdges', flexShrink: 0 }}
    >
      <path d="M48 0H96V48H48V96H96V144H48V192H0V48H48Z" fill="#df1717" />
      <path d="M0 48L48 0V48Z" fill="#a50e0e" />
      <rect x="96" y="48" width="48" height="48" fill="#df1717" />
      <rect x="96" y="144" width="48" height="48" fill="#df1717" />
    </svg>
  );
}

export default function Logo({ size = 18 }: { size?: number }) {
  return (
    <span className="inline-flex items-center gap-2.5 text-ink">
      <LogoMark size={size} />
      <span className="whitespace-nowrap text-base leading-none tracking-[-0.01em]">
        Reforma Digital
      </span>
    </span>
  );
}
