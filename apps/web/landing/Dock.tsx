'use client';

import { useEffect, useState } from 'react';
import HeroComposer from './HeroComposer';

/** Barra fija de la portada: aparece cuando la pregunta (`#preguntar`) sale de la vista. */
export default function Dock({ onAsk }: { onAsk: (query: string) => void }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const target = document.getElementById('preguntar');
    if (!target) return;
    const observer = new IntersectionObserver((entries) =>
      setVisible(!entries.some((entry) => entry.isIntersecting)),
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, []);
  return (
    <div className="doc-dock" data-visible={visible || undefined} inert={!visible}>
      <HeroComposer onAsk={onAsk} variant="dock" />
    </div>
  );
}
