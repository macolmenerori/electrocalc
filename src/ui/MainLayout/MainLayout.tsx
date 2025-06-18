import { Stack } from '@mui/material';

import HeaderComponent from '@/components/HeaderComponent/HeaderComponent';
import { Navbar } from '@/components/Navbar/Navbar';

export function MainLayout() {
  return (
    <Stack spacing={3}>
      <header>
        <Navbar />
      </header>
      <main>
        <HeaderComponent />
      </main>
    </Stack>
  );
}
