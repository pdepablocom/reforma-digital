import { PixelIcon } from '../components/pixel-icon';

interface Item {
  icon: 'person' | 'company' | 'state';
  title: string;
  text: string;
}

const icons = { person: 'user', company: 'briefcase', state: 'building' } as const;

export default function Actors({ items }: { items: Item[] }) {
  return (
    <ul className="doc-actors">
      {items.map((item) => (
        <li key={item.title}>
          <PixelIcon name={icons[item.icon]} />
          <p className="doc-actors-title">{item.title}</p>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  );
}
