import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { GamePage } from './GamePage';
import { LanguageProvider } from './language';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider><GamePage /></LanguageProvider>
  </StrictMode>,
);
