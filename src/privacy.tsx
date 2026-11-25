import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import { LanguageProvider } from './language';
import { PrivacyPage } from './PrivacyPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LanguageProvider><PrivacyPage /></LanguageProvider>
  </StrictMode>,
);
