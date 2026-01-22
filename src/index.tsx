import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';

import { ViteReactSSG } from 'vite-react-ssg/single-page';

import './i18n';

import { App } from './App';

import { LoadingSpinner } from '@/components/LoadingSpinner/LoadingSpinner';

export const createRoot = ViteReactSSG(
  <HelmetProvider>
    <Suspense fallback={<LoadingSpinner position="center" />}>
      <App />
    </Suspense>
  </HelmetProvider>
);
