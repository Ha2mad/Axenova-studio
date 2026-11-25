import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { LanguageProvider } from './language';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider><App /></LanguageProvider>
  </StrictMode>,
);
