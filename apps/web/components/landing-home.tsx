'use client';

import { useEffect, useState } from 'react';
import Chat from './chat';
import Landing from '../landing/Landing';
import '../landing/landing.css';

export default function LandingHome() {
  const [conversation, setConversation] = useState<string | null>(null);
  const [chatKey, setChatKey] = useState(0);
  // La pregunta no va a la URL; solo una entrada de historial para que Atrás vuelva a la portada.
  useEffect(() => {
    function onPopState(event: PopStateEvent) {
      if (!event.state?.chat) setConversation(null);
    }
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);
  function ask(query: string) {
    window.history.pushState({ chat: true }, '');
    setConversation(query);
  }
  if (conversation !== null) {
    return (
      <Chat
        key={chatKey}
        initialQuestion={conversation}
        onGoHome={() => {
          if (window.history.state?.chat) window.history.back();
          else setConversation(null);
          window.scrollTo({ top: 0, behavior: 'instant' });
        }}
        onNewConversation={() => {
          setConversation('');
          setChatKey((value) => value + 1);
        }}
      />
    );
  }
  return <Landing onAsk={ask} />;
}
