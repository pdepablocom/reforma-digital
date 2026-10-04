'use client';

import { useState, type FormEvent } from 'react';
import { warm } from '../lib/pii';
import { PixelIcon } from '../components/pixel-icon';

const examples = [
  'Me ha llegado una carta de Hacienda y no la entiendo',
  '¿Cómo pido cita para renovar el DNI?',
  '¿Cómo me empadrono en mi ciudad?',
];

/** `home`: el buscador de la portada. `dock`: la barra fija que aparece al bajar. */
export default function HeroComposer({
  onAsk,
  variant,
}: {
  onAsk: (query: string) => void;
  variant: 'home' | 'dock';
}) {
  const [query, setQuery] = useState('');
  const ready = query.trim().length >= 4;
  const id = variant === 'home' ? 'question' : 'dock-question';
  function submit(event?: FormEvent) {
    event?.preventDefault();
    if (!ready) return;
    onAsk(query.trim());
  }
  const field = (
    <>
      <label htmlFor={id} className="sr-only">
        Escribe tu pregunta
      </label>
      <textarea
        id={id}
        rows={variant === 'home' ? 2 : 1}
        value={query}
        onChange={(event) => {
          warm();
          setQuery(event.target.value);
        }}
        onKeyDown={(event) => {
          if (event.key === 'Enter' && !event.shiftKey && !event.nativeEvent.isComposing) {
            event.preventDefault();
            submit();
          }
        }}
        placeholder={
          variant === 'home' ? 'Escribe aquí lo que necesitas hacer' : 'Pregunta otra cosa'
        }
        maxLength={1200}
        autoComplete="off"
        enterKeyHint="send"
      />
    </>
  );
  const send = (
    <button type="submit" className="ask-button" disabled={!ready}>
      Preguntar
      <PixelIcon name="arrow-right" />
    </button>
  );
  if (variant === 'dock') {
    return (
      <form className="dock-composer" onSubmit={submit}>
        {field}
        {send}
      </form>
    );
  }
  return (
    <>
      <form className="home-composer" onSubmit={submit}>
        {field}
        <div className="home-composer-foot">
          <span>Te contamos lo que dice la web oficial. Nunca rellenamos ni enviamos nada.</span>
          {send}
        </div>
      </form>
      <div className="home-examples" role="group" aria-label="Ejemplos de preguntas">
        {examples.map((example) => (
          <button key={example} type="button" onClick={() => onAsk(example)}>
            {example}
          </button>
        ))}
      </div>
    </>
  );
}
