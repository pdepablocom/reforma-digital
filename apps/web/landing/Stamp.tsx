import { useId } from 'react';
import { PixelIcon, type PixelIconName } from '../components/pixel-icon';

const W = 150;
const H = 190;
const STEP = 14;
const holes: [number, number][] = [];
for (let x = STEP / 2; x < W; x += STEP) holes.push([x, 0], [x, H]);
for (let y = STEP / 2; y < H; y += STEP) holes.push([0, y], [W, y]);

/** Sello de correos: marco perforado, número, pictograma y nombre en vertical. */
export default function Stamp({
  n,
  name,
  icon,
  color,
  postmarked,
  question,
  onSelect,
}: {
  n: number;
  name: string;
  icon: PixelIconName;
  color: string;
  postmarked: boolean;
  question: string;
  onSelect: (question: string) => void;
}) {
  const mask = useId();
  return (
    <button type="button" className="stamp" onClick={() => onSelect(question)}>
      <svg className="stamp-frame" viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
        <mask id={mask}>
          <rect width={W} height={H} fill="#fff" />
          {holes.map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="4.5" fill="#000" />
          ))}
        </mask>
        <rect width={W} height={H} mask={`url(#${mask})`} />
      </svg>
      <span className="stamp-face" aria-hidden="true">
        <span className="stamp-n">{String(n).padStart(2, '0')}</span>
        {postmarked && (
          <svg className="stamp-postmark" width="46" height="30" viewBox="0 0 46 30">
            <circle cx="31" cy="15" r="12" />
            <path d="M0 8q5-4 10 0t10 0M0 15q5-4 10 0t10 0M0 22q5-4 10 0t10 0" />
          </svg>
        )}
        <span className="stamp-icon" style={{ color }}>
          <PixelIcon name={icon} size={48} />
        </span>
        <span className="stamp-name">{name}</span>
      </span>
      <span className="sr-only">
        {question}
        {postmarked ? ' (sede adaptada)' : ''}
      </span>
    </button>
  );
}
