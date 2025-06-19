import { Stack } from '@mui/material';

import { CalculatorLayout } from '../CalculatorLayout/CalculatorLayout';

import FooterComponent from '@/components/FooterComponent/FooterComponent';
import { HeaderComponent } from '@/components/HeaderComponent/HeaderComponent';
import { Navbar } from '@/components/Navbar/Navbar';

export function MainLayout() {
  return (
    <Stack spacing={3}>
      <header>
        <Navbar />
      </header>
      <main>
        <HeaderComponent />
        <CalculatorLayout />
      </main>
      <footer>
        <FooterComponent />
      </footer>
    </Stack>
  );
}
