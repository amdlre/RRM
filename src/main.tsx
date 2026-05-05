import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import {SITE} from './config/site';

if (SITE.brandName) {
  document.title = SITE.brandTagline
    ? `${SITE.brandName} | ${SITE.brandTagline}`
    : SITE.brandName;
}

const favicon = document.querySelector<HTMLLinkElement>('link[rel="icon"]');
const appleIcon = document.querySelector<HTMLLinkElement>('link[rel="apple-touch-icon"]');
if (SITE.logoUrl) {
  if (favicon) favicon.href = SITE.logoUrl;
  if (appleIcon) appleIcon.href = SITE.logoUrl;
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
