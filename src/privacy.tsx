import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import '@fontsource-variable/sora';
import './styles.css';
import { PrivacyPage } from './PrivacyPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <PrivacyPage />
  </StrictMode>,
);
