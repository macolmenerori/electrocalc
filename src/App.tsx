import CssBaseline from '@mui/material/CssBaseline';

import { JsonLd, SEOHead } from '@/components/SEO';
import { MainLayout } from '@/ui/MainLayout/MainLayout';
import { ThemeProvider } from '@/ui/theme/ThemeContext';

export function App() {
  return (
    <ThemeProvider>
      <SEOHead />
      <JsonLd />
      <CssBaseline />
      <MainLayout />
    </ThemeProvider>
  );
}
